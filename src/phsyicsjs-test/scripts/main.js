require.config({

    packages: [
        {
          name: 'physicsjs',
          location: 'physicsjs',
          main: 'physicsjs-full-0.6.0.min'
        }
    ],
});

require(['app'], function( app ){
});