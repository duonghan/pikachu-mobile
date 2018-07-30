/*
 * Created by Duong Han
 * Date: 7/30/18
 * Time: 11:42 PM
 * Copyright (c) 2018
 */
 
 import React, { Component } from 'react';
 import {Image, TouchableOpacity, View} from 'react-native';

 export default class Cell extends Component{
  render(){
   return (
     <View>
       <TouchableOpacity
        onPress={}>
         <Image src={require(this.props.imgPath)}/>
       </TouchableOpacity>
     </View>
   )
  }
 }