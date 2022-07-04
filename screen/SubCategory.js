import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
    query,
    onSnapshot, 
    collection,
  } from "firebase/firestore";
  import { db } from "../App";

const SubCategory = ({route}) => {
    const item = route.params.item; 
    const [SubCategory , setSubCategory] = useState([])

    useEffect(() => {
        const q = query(collection(db, "painting"));
    
        const categoryListener = onSnapshot(q, (querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data()
            );
          });
          setSubCategory(list);
        });
        return categoryListener;
      }, []);
  return (
    <View>
      <Text>SubCategory</Text>
    </View>
  )
}

export default SubCategory

const styles = StyleSheet.create({})