// make a monster function to call the correct pictures.
//Function takes a color and face number parameter
function makeMonster(color, face_number) {
    console.log("Monster Function Working")


        //Iterate through the monster object and match the color 
        for (let i = 0; i < monster.length; i++ ) {
            if (monster[i].color == color) {
                console.log("color works")
                
                //dislay the correct colored body
                let monsterImage = document.createElement('img');
                monsterImage.setAttribute('class', 'monsterBody');
                monsterImage.setAttribute('src', monster[i].body);
                monsterImage.setAttribute('alt', monster[i].color);
                document.querySelector('.results').appendChild(monsterImage);

                
                const faces = monster[i].faces
                //Iterate throught he faces aray and find the correct face
                for (let j = 0; j < faces.length; j++){
                    if (j == face_number) {
                        console.log("faces works")
                        console.log(faces[j])
                    
                        //Add the correct face to the page
                        let monsterFace = document.createElement('img');
                        monsterFace.setAttribute('class', 'monsterFace');
                        monsterFace.setAttribute('src', faces[j]);
                        monsterFace.setAttribute('alt',"face " + (face_number + 1));
                        document.querySelector('.results').appendChild(monsterFace);
                    }
                
                }

                
            }
            
        }
    }



