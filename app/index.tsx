import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with gradient overlay */}
      <View style={styles.header}>
        <View style={styles.headerOverlay} />
        <Image
          source={{ uri: 'https://scontent.fubp1-1.fna.fbcdn.net/v/t39.30808-6/317232347_3206733259590165_4537751438105400688_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=R1opsbqXZ7kQ7kNvgGqEVP0&_nc_zt=23&_nc_ht=scontent.fubp1-1.fna&_nc_gid=A65iuFzxG4_gTRkIlGsjcM1&oh=00_AYBVpn2FFzGc2OvOgPRPGRll4wT45URGKqSF8cHHwFtg4Q&oe=6727B0B6' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Precha Chainara</Text>
        <View style={styles.professionContainer}>
          <MaterialIcons name="computer" size={20} color="white" />
          <Text style={styles.profession}>วิทยาการคอมพิวเตอร์</Text>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="person" size={24} color="#2196F3" />
          <Text style={styles.sectionTitle}>เกี่ยวกับฉัน</Text>
        </View>
        <View style={styles.contentCard}>
          <Text style={styles.sectionContent}>
          <p>สวัสดีทุกคน! ฉันชื่อ [ปรีชา ไชยนารา] <br/><dd>ผู้เชี่ยวชาญด้านวิทยาการคอมพิวเตอร์ โชคดีที่ฉันได้ใช้บริการและเข้าใจเทคโนโลยีคอมพิวเตอร์ทั้งหมด ก่อนหน้านี้ ถือเป็นเหตุการณ์สำคัญที่เกิดขึ้นและช่วยแก้ไขปัญหาในโลกปัจจุบัน </dd> </p>
        
        <p>ฉันกระตือรือร้นที่จะเรียนรู้เทคโนโลยีใหม่ๆ และตื่นเต้นที่จะได้มีส่วนร่วมในโครงการพัฒนาซอฟต์แวร์ที่น่าตื่นเต้น ฉันตั้งใจที่จะเป็นนักเรียนที่เก่งกาจและมีความรู้ด้านวิทยาการคอมพิวเตอร์ที่แข็งแกร่ง เพื่อสามารถใช้ความรู้และทักษะของฉันในการแก้ไขปัญหาองค์กรและสร้างผลลัพธ์ที่ยอดเยี่ยม

        เพื่อเคารพความรับผิดชอบในงานและการพัฒนาตนเอง ฉันใส่ใจในการเรียนรู้และยึดมั่นในหลักการเขียนโค้ด ฉันรู้ว่าการทำงานเป็นทีมมีความสำคัญ ฉันพร้อมที่จะทำงานร่วมกับผู้อื่นในโครงการที่ท้าทายเพื่อผลิตผลงานที่มีคุณภาพสูงและสร้างสรรค์</p>
          </Text>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FontAwesome name="graduation-cap" size={24} color="#2196F3" />
          <Text style={styles.sectionTitle}>การศึกษา</Text>
        </View>
        
        <View style={styles.educationCard}>
          <View style={styles.educationIcon}>
            <FontAwesome name="university" size={24} color="white" />
          </View>
          <View style={styles.educationContent}>
            <Text style={styles.educationLevel}>ปริญญาตรี</Text>
            <Text style={styles.educationSchool}>มหาวิทยาลัยราชภัฏศรีสะเกษ</Text>
            <Text style={styles.educationDetails}>คณะศิลปศาสตร์และวิทยาศาสตร์</Text>
            <Text style={styles.educationDetails}>สาขาวิทยาการคอมพิวเตอร์</Text>
          </View>
        </View>

        <View style={styles.educationCard}>
          <View style={styles.educationIcon}>
            <FontAwesome name="school" size={24} color="white" />
          </View>
          <View style={styles.educationContent}>
            <Text style={styles.educationLevel}>มัธยมศึกษาตอนปลาย</Text>
            <Text style={styles.educationSchool}>โรงเรียนขุขันธ์</Text>
            <Text style={styles.educationDetails}>สาขาโปรแกรมเมอร์</Text>
          </View>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="build" size={24} color="#2196F3" />
          <Text style={styles.sectionTitle}>ทักษะ</Text>
        </View>
        <View style={styles.skillsContainer}>
          {['HTML', 'Python', 'JavaScript', 'CSS', 'PHP', 'Node.js'].map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <MaterialIcons name="code" size={20} color="#2196F3" />
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="work" size={24} color="#2196F3" />
          <Text style={styles.sectionTitle}>โปรเจกต์</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.projectCard}
          onPress={() => openLink('https://github.com/Precha-chang/Water-Flutterapp.git')}
        >
          <View style={styles.projectHeader}>
            <MaterialIcons name="mobile-friendly" size={24} color="#2196F3" />
            <Text style={styles.projectTitle}>App แจ้งเตือนดื่มน้ำ</Text>
          </View>
          <Text style={styles.projectTech}>Flutter</Text>
          <Text style={styles.projectDescription}>
            สร้าง application เพื่อแสดงทักษะและโปรเจกต์ของตนเอง
          </Text>
          <a href="https://github.com/Precha-chang/Water-Flutterapp.git">คลิกที่นี่เพื่อดู Project</a>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.projectCard}
          onPress={() => openLink('https://github.com/Precha-chang/THE_Bar.git')}
        >
          <View style={styles.projectHeader}>
            <MaterialIcons name="web" size={24} color="#2196F3" />
            <Text style={styles.projectTitle}>The Bar</Text>
          </View>
          <Text style={styles.projectTech}>HTML • CSS • JavaScript • Python • PHP</Text>
          <Text style={styles.projectDescription}>
            พัฒนาเว็บแอปที่มีฟังก์ชันระบบตะกร้าสินค้า คลังสินค้า จัดซื้อจำหน่ายสินค้า
          </Text>
          <a href="https://github.com/Precha-chang/THE_Bar.git">คลิกที่นี่เพื่อดู Project</a>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 300,
    backgroundColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
  professionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
  },
  profession: {
    fontSize: 18,
    color: 'white',
    marginLeft: 8,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  contentCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  educationCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    elevation: 3,
  },
  educationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  educationContent: {
    flex: 1,
  },
  educationLevel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  educationSchool: {
    fontSize: 16,
    color: '#2196F3',
    marginVertical: 5,
  },
  educationDetails: {
    fontSize: 14,
    color: '#666',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 2,
  },
  skillText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  projectTech: {
    fontSize: 14,
    color: '#2196F3',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});