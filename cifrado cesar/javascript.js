              // JavaScript Document
             window.onload = function()//si una pagina ya cargo
             {
 	cifrar();
             }
             var cifrar =function ( cifrar, letra ) 
        
             {
                 cesar= '';
             for( i=0; i<cifrar.length; i++ ) //nos hace el recorrido
                 {
                   palab= cifrar.charCodeAt(i); //charCodeAt(i); Retorna el valor ascii del carácter.
                   if( palab>= 97 && palab <= 122 )//si palabra mayor "a" Y PALABRA MENOR = "z"
                   palab = palab + letra;//PALABRA Y SUMA  EL VALOR QUE SE LE ASIGNE  A LA palabra 
                   if(palab> 122)
                  palab = palab- 30;
                  cesar= cesar+ String.fromCharCode(palab);
                 }
                   return  cesar;//retorna 
             }
                function cifrado(cifrar,letraa) //fucion cifrar
              {  
                 cesar = ''; //declaro un var vacio
              for( i=0; i<cifrar.length; i++ ) //for donde nos recorre
                     {
                 pala = cifrar.charCodeAt(i);//charCodeAt(i) Retorna el valor ascii del carácter.
                  if( pala>= 65 && pala <= 90 )//si palabra mayor "A" Y palabra  = "z"
                  pala = pala + letraa;
                  if(pala> 90)
                 pala =pala ;
                 cesar=  cesar + String.fromCharCode(pala);//Retorna el carácter dado el número Ascii
                     }
                return cesar;//retona caracter ascii
                 }