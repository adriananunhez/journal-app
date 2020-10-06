import cloudinary from 'cloudinary'
const { fileUpload } = require("../../helpers/fileUpload");


cloudinary.config({ 
    cloud_name: 'dckhw6xkc', 
    api_key: '258991526437333', 
    api_secret: 'kvLB0AoE0RtRFrhD5g8RKs_YdC4' 
});

describe('Test in fileUpload',  () => {
    
    test('should upload file and return URL', async ( done ) => {
        
        const resp = await fetch('https://www.online-image-editor.com/styles/2019/images/power_girl.png')
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        //Borrar imagen por Id
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.png','');
        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });
    
    })

    /*test('should return error', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        //expect( url ).toBe( null );
    
    })*/
    
})
