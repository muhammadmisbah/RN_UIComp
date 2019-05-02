import React from 'react';
import { Text, View } from 'react-native';
import FontAwsome from "react-native-vector-icons/FontAwesome"
import FontAwsome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const RideHistoryItem = ({
    amount,
    time,
    calories,
    from,
    to,
    distance,
    date,
    index
}) => (
        <View style={{ width: "90%", backgroundColor: "#fff", height: 200, borderRadius: 10, flexDirection: "row", elevation: 10, marginBottom: 15 }}>
            {/* Left Card Side */}
            <View style={{ flex: 0.44 }}>
                {/* Heading */}
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", paddingHorizontal: "10%", marginTop: 14 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: '#42c0ce' }}>Bike {index + 1}</Text>
                    <View style={{ height: 3, width: 3, borderRadius: 3 / 2, backgroundColor: "#bcbcbc", marginHorizontal: "5%" }} />
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#4bbc54" }}>${amount}</Text>
                </View>
                {/* Sub Heading */}
                <View style={{ width: "100%", justifyContent: "center", paddingHorizontal: "10%", paddingVertical: "2%" }}>
                    <Text style={{ fontSize: 11, color: "#bcbcbc" }}>Time: {time}</Text>
                </View>
                {/* Bike Image View */}
                <View style={{ flex: 1, padding: "2%", justifyContent: "center", alignItems: "center" }}>
                    <FontAwsome name="bicycle" color="#0d839c" size={95} />
                </View>
            </View>

            {/* Right Card Side */}
            <View style={{ flex: 0.56 }}>
                {/* Heading */}
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", paddingHorizontal: "2%", marginTop: 14 }}>
                    <FontAwsome5 name="fire-alt" color="red" size={20} style={{ marginRight: "5%" }} />
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>{calories} Calories</Text>
                </View>
                {/* From To Destination View */}
                <View style={{ height: "50%", paddingVertical: "4%", width: "100%", marginTop: "4%", flexDirection: "row" }}>
                    {/* Left Side ( Doted Portion ) */}
                    <View style={{ flex: 0.15 }}>
                        <View style={{ flex: 0.25, alignItems: "center", justifyContent: "center" }}>
                            <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "rgba(70, 199, 206, 0.3)", alignItems: "center", justifyContent: "center" }}>
                                <View style={{ height: "30%", width: "30%", borderRadius: 10, backgroundColor: "#42c0ce" }} />
                            </View>
                        </View>
                        <View style={{ flex: 0.5, alignItems: "center" }}>
                            <View style={{ width: 4, height: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                                {[...Array(10)].map((a, i) => <View key={i} style={{ height: 3, width: 3, borderRadius: 1.5, backgroundColor: "#42c0ce" }} />)}
                            </View>
                        </View>
                        <View style={{ flex: 0.25, alignItems: "center", justifyContent: "center" }}>
                            <View style={{
                                height: 16, width: 16, borderRadius: 8, borderWidth: 3, borderColor: "#42c0ce", alignItems: "center", justifyContent: "center"
                            }} />
                        </View>
                    </View>
                    {/* Right Side (Heading Portion) */}
                    <View style={{ flex: 0.85, justifyContent: "space-between" }}>
                        <View style={{ marginLeft: "2%" }}>
                            <Text style={{ fontSize: 10, color: "#bcbcbc" }}>From</Text>
                            <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>{from}</Text>
                        </View>
                        <View style={{ marginLeft: "2%" }}>
                            <Text style={{ fontSize: 10, color: "#bcbcbc" }}>To Destination</Text>
                            <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>{to}</Text>
                        </View>
                    </View>

                </View>
                {/* Milage Bar */}
                <View style={{ paddingTop: "7%", width: "100%", paddingLeft: "3%" }}>
                    <View style={{ width: "89%", height: 3, backgroundColor: "rgba(70, 199, 206, 0.2)" }}>
                        <View style={{ height: "100%", width: "20%", backgroundColor: "#42c0ce" }} />
                    </View>
                </View>
                {/* Date & Miles */}
                <View style={{ flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "90%", paddingLeft: "2%" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcons name="map-marker-distance" color="orange" size={10} style={{ marginRight: "10%", marginLeft: "2%" }} />
                        <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>{distance}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 10, color: "#bcbcbc" }}>Date: {date}</Text>
                    </View>
                </View>

            </View>
        </View>
    )

export default RideHistoryItem;