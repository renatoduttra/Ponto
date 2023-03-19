
import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
 
export default function New() {
    var segunda 
    var terca
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const user = [
      {nmPessoa:"Fabio Oliveira Guimaraes", dtFolhaPonto:"segunda", hrInicioAula:"05:40:00 PM", hrFimAula:"07:00:00 PM", nmDisciplina:"Inteligencia Artificial"},
      {nmPessoa:"Fabio Oliveira Guimaraes", dtFolhaPonto:"terca", hrInicioAula:"19:40:00 PM", hrFimAula:"19:00:00 PM", nmDisciplina:"Inteligencia Artificial"},
      //{nmPessoa:"Fabio Oliveira Guimaraes", dtFolhaPonto:"10/10/2022", hrInicioAula:"19:10:00 PM", hrFimAula:"20:50:00 PM", nmDisciplina:"Gerência de Serviços em TI"},
      //{nmPessoa:"Fabio Oliveira Guimaraes", dtFolhaPonto:"10/10/2022", hrInicioAula:"21:00:00 PM", hrFimAula:"22:40:00 PM", nmDisciplina:"Gerência de Serviços em TI"},
      //{nmPessoa:"Francisco Javier de Obaldia Diaz", dtFolhaPonto:"10/10/2022", hrInicioAula:"19:10:00 PM", hrFimAula:"20:50:00 PM", nmDisciplina:"Redes de Computadores I"}
    
    ]
        //javier : {dtFolhaPonto:"10/10/2022", hrInicioAula:"21:00:00 PM", hrFimAula:"22:40:00 PM", nmDisciplina:"Redes de Computadores I (com laboratório)"},
        //javier : {dtFolhaPonto:"10/10/2022", hrInicioAula:"19:10:00 PM", hrFimAula:"20:50:00 PM", nmDisciplina:"Sistemas de Comunicação"},
        //javier : {dtFolhaPonto:"10/10/2022", hrInicioAula:"21:00:00 PM", hrFimAula:"22:00:00 PM", nmDisciplina:"Sistemas de Comunicação"},
        //javier : {dtFolhaPonto:"10/10/2022", hrInicioAula:"19:10:00 PM", hrFimAula:"20:50:00 PM", nmDisciplina:"Arquitetura e Sistemas Distribuídos (com laboratório)"},
        //javier : {dtFolhaPonto:"10/10/2022", hrInicioAula:"21:00:00 PM", hrFimAula:"22:40:00 PM", nmDisciplina:"Arquitetura e Sistemas Distribuídos (com laboratório)"}
    var d = new Date();
  /*   var aux, hr, mat, name = ""
    
    if (semana[d.getDay()] == "Segunda-Feira"){
        hr = user.Quinta.hrInicioAula
        mat = user.Quinta.nmDisciplina
        name = user.Quinta.nmPessoa
    }
    var aux, hr1, mat1, name1 = ""
    if (semana[d.getDay()] == "Segunda-Feira"){
        hr1 = user.Sexta.hrInicioAula
        mat1 = user.Sexta.nmDisciplina
        name1 = user.Sexta.nmPessoa
    }
         */

 return (
   <View style={styles.container}>
            <View style={styles.corpo}>
                <View style={styles.lista}>
                    {/* <Text style={styles.prof}>Professor</Text> */}
                    {/* <Text style={styles.data}>Data</Text> */}
                    <Text style={styles.Hora}>Horario</Text>
                    <Text style={styles.materia}>Matéria</Text>
                    {/* <Text style={styles.botao}>Marcar</Text> */}
                </View>
                    {/* (user.length > 0 ) */}
                {(user.length > 0 ) ? (
                    user.map((user, index) =>
                    <View style={styles.content}>
                        <TouchableOpacity activeOpacity={0.1} style={styles.buttonuser}>
                        <Text style={styles.prof}>{user.nmPessoa}</Text>
                        <Text style={styles.Hora}>{user.hrInicioAula}</Text>
                        <Text style={styles.materia}>{user.nmDisciplina}</Text>
                        <Text style={styles.data}>{user.dtFolhaPonto}</Text> 
                        </TouchableOpacity>
                    </View>
                    ) 
                ):(
                    <p>Não ha itens na lista</p>
                )
            }
            </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F0F8FF',

    },
    titulo:{
        color:'white',
        backgroundColor:'#A020F0',
        paddingTop:50,
        paddingBottom:20,
        paddingStart:20,
        paddingEnd:20,
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
    },
    corpo:{
    },
    lista:{
        backgroundColor:'#DCDCDC',
        flexDirection: 'row',// alinha os itens na linha
        justifyContent: 'space-between', // espacamento entro os itens
        padding:16,
    },
    content:{
        backgroundColor:'#B0C4DE',
        flexDirection: 'row',// alinha os itens na linha
        justifyContent: 'space-between', // espacamento entro os itens
        padding:8,
    },/*  */
    buttonuser:{
        //width:70,
        //height:100,
        flex:1,
        padding:10,
        backgroundColor: 'rgba(255,255,255,0.5)',
        flexDirection: 'column',
        //justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 35/2,
        
    }
});