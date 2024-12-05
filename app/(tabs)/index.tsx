import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to Travelin</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://hariannusantara.com/wp-content/uploads/2019/06/gambar-pemandangan-pegunungan4.jpg",
          }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Pilihan Paket</Text>
        <View style={styles.cardContainer}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://tse1.mm.bing.net/th?id=OIP.pzkv3n05y3a7IRMBtUw8NwHaE8&pid=Api&P=0&h=220",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Bromo</Text>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://tse2.mm.bing.net/th?id=OIP.LxiazPLXzer44dvCh1uemQHaE8&pid=Api&P=0&h=220",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Rinjani</Text>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://theworldtravelguy.com/wp-content/uploads/2021/07/DJI_0126_1200.jpg",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Kawah Ijen</Text>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://tse2.mm.bing.net/th?id=OIP.WaMhictAjQ835jfJBJ2qvQHaE6&pid=Api&P=0&h=220",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Tanjung Bira</Text>
          </TouchableOpacity>

          {/* Card 5 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://tse1.mm.bing.net/th?id=OIP.HWtwpNnjAzuY7u7P-BKLOQHaDi&pid=Api&P=0&h=220",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Danau Toba</Text>
          </TouchableOpacity>

          {/* Card 6 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://tour.dolandolen.com/wp-content/uploads/2018/01/Sailing-Komodo-4.jpg",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Pulau Komodo</Text>
          </TouchableOpacity>

          {/* Card 7 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://tse4.mm.bing.net/th?id=OIP.XvIPifH5pN6lkPbvuF5vbAHaE8&pid=Api&P=0&h=220",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Banda Neira</Text>
          </TouchableOpacity>

          {/* Card 8 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://tse1.mm.bing.net/th?id=OIP.VDttnzIo2o4IQWEUs-oaFgHaEK&pid=Api&P=0&h=220",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Bali</Text>
          </TouchableOpacity>

          {/* Card 9 */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://i2.wp.com/www.ourtasteforlife.com/wp-content/uploads/2019/01/Pink-Beach-Flores-1.jpg?fit=1200%2C800&ssl=1",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Labuan Bajo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#007bff",
    paddingVertical: responsiveHeight(2),
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
  },
  banner: {
    marginVertical: responsiveHeight(2),
    alignItems: "center",
  },
  bannerImage: {
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    borderRadius: 10,
  },
  content: {
    paddingHorizontal: responsiveWidth(5),
  },
  contentTitle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    marginBottom: responsiveHeight(2),
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    width: responsiveWidth(28),
    alignItems: "center",
    marginBottom: responsiveHeight(2),
  },
  cardImage: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: 10,
    marginBottom: responsiveHeight(1),
  },
  cardText: {
    fontSize: responsiveFontSize(2),
    textAlign: "center",
  },
});

export default HomePage;
