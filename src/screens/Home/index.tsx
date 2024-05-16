// import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
// import { arr, arr2 } from '../../constant/data'
// import React from 'react'
// const { width, height } = Dimensions.get('window')


// const screenWidth = Dimensions.get('window').width;
// console.log(screenWidth, "screenWidth");

// const itemWidth = (screenWidth - 60) / 2;

// const Item = ({ title }: any) => (
//     <View style={styles.item}>
//         <Text style={styles.headerText}>{title}</Text>
//     </View>
// );
// const Items = ({ abc }: any) => (
//     <View style={styles.items}>
//         <Text style={styles.headerText}>{abc}</Text>
//     </View>
// );

// const Home = () => {
//     return (
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.titles}>Color</Text>
//                 <FlatList
//                     data={arr}
//                     horizontal
//                     renderItem={({ item }) => <Item title={item?.Color} />}
//                     keyExtractor={item => item.id}
//                 />
//             </View>
//             <View style={styles.verticalBoxex}>
//                 <Text style={styles.Category}>Category</Text>
//                 <FlatList
//                     data={arr2}
//                     numColumns={2}
//                     renderItem={({ item }) => {
//                         return <Items abc={item?.Color} />;
//                     }}
//                     keyExtractor={items => items.id}
//                 />
//             </View>

//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({
// container: {
//     backgroundColor: "black",
//     height: height,
//     paddingHorizontal: 15,
// },
//     titles: {
//         color: "white",
//         fontWeight: "800",
//         marginVertical: 10,
//     },
//     headerText: {
//         color: "white",
//         fontWeight: "800",
//         marginVertical: 10,
//     },
//     item: {
//         height: 80,
//         width: 80,
//         marginHorizontal: 5,
//         backgroundColor: "white",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 10,
//         borderColor: "white",
//         borderWidth: 1,
//         marginBottom: 10,
//         color: "black"
//     },
//     items: {
//         height: 80,
//         width: itemWidth,
//         marginHorizontal: 5,
//         backgroundColor: "purple",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 10,
//         borderColor: "purple",
//         borderWidth: 1,
//         marginBottom: 10,
//         color: "black"
//     },
//     Category: {
//         color: "white",
//         fontWeight: "800",
//         marginVertical: 10,
//     },
//     verticalBoxex: {
//         display: "flex",
//         justifyContent: "center",
//         paddingHorizontal: 5,
//         color: "white",
//     }
// })






import { Image, StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { dataArr } from '../../constant/data'
const { height } = Dimensions.get('window')
const Home = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>WhatsApp</Text>
                <Image source={require('../../assets/images/search.png')} style={{ height: 25, width: 30 }} />
            </View>

            {/* filters */}
            <View style={styles.filter}>
                <Text style={styles.filterText}>All</Text>
                <Text style={styles.filterTexts}>Unread</Text>
                <Text style={styles.filterText}>Groups</Text>
            </View>

            {/* chats */}

            <View>
                <FlatList
                    data={dataArr}
                    renderItem={(item) => {
                        console.log(item);
                        return (
                            <View>
                                <View style={styles.chats}>
                                    <Image source={require('../../assets/images/profile.jpg')} style={{ height: 50, width: 50, borderRadius: 50, marginRight:20 }} />
                                    <View>
                                        <Text style={styles.name}>
                                            {item?.item?.name}
                                        </Text>
                                        <Text>
                                            {item?.item?.text}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={item => item?.id}

                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: height,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontWeight: '900',
        color: "green",
        fontSize: 20,
    },
    filter: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        marginVertical: 20,
    },
    filterText: {
        backgroundColor: "#d8fdd2",
        borderRadius: 20,
        paddingHorizontal: 13,
        paddingVertical: 3,
        alignItems: 'center',
        textAlign: 'center',
    },
    filterTexts: {
        marginHorizontal: 7,
        backgroundColor: "#d8fdd2",
        borderRadius: 20,
        paddingHorizontal: 13,
        paddingVertical: 3,
        alignItems: 'center',
        textAlign: 'center',
    },
    chats:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        marginVertical:10,
    },
    name:{
        fontWeight:'900'
    }

}) 