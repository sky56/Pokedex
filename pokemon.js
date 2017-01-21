$(document).ready(function() {
                $('#dosomething').click(function(event) {
                    var term = $('#enter').val();
                    var url = 'http://pokeapi.co/api/v2/pokemon/'+term.toLowerCase()+'/';
                    $.getJSON(url,function(jd) {
                        var id = jd.id;
                        var height = jd.height;
                        var weight = jd.weight;
                        var pok_type = jd.types[0].type.name;
                        pok_type = pok_type.charAt(0).toUpperCase() + pok_type.slice(1);
                        document.getElementById("height").value = height;
                        document.getElementById("weight").value = weight;
                        document.getElementById("type").value = pok_type;
                        var speed = jd.stats[0].base_stat;
                        document.getElementById("speed").style.width = speed + '%';
                        var special_defense = jd.stats[1].base_stat;
                        document.getElementById("special_defense").style.width = special_defense + '%';
                        var special_attack = jd.stats[2].base_stat;
                        document.getElementById("special_attack").style.width = special_attack + '%';
                        var defense = jd.stats[3].base_stat;
                        document.getElementById("defense").style.width = defense + '%';
                        var attack = jd.stats[4].base_stat;
                        document.getElementById("attack").style.width = attack + '%';
                        var hp = jd.stats[5].base_stat;
                        document.getElementById("hp").style.width = hp + '%';
                        var img_url='http://pokeapi.co/media/sprites/pokemon/'+id+'.png';
                        $('#image_pok').html("<img src='" + img_url + "' />");
                    });
                });
            });
