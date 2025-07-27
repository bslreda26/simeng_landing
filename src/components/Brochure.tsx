import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// Import images
import MethodXImage from "../assets/MethodX.png";
import NanoImage from "../assets/Nano.png";
import AdventureImage from "../assets/undraw_adventure_9my9.png";
import PrototypingImage from "../assets/undraw_prototyping-process_1thp.png";
import MedicalResearchImage from "../assets/undraw_medical-research_pze7.png";
import TeamSpiritImage from "../assets/undraw_team-spirit_18vw.png";
import ContactUsImage from "../assets/undraw_contact-us_kcoa.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    paddingBottom: 20,
    borderBottom: "3 solid #059669",
    backgroundColor: "#f8fafc",
    padding: 20,
    borderRadius: 12,
    shadow: "0 4 6 -1 rgba(0, 0, 0, 0.1)",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#059669",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    shadow: "0 2 4 rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 20,
    color: "#059669",
    fontWeight: "600",
    marginBottom: 4,
  },
  tagline: {
    fontSize: 14,
    color: "#6b7280",
    fontStyle: "italic",
  },
  // First page layout
  firstPageContent: {
    flexDirection: "row",
    flex: 1,
    gap: 30,
    alignItems: "center",
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    width: "90%",
    height: 250,
    borderRadius: 12,
    shadow: "0 4 8 rgba(0, 0, 0, 0.15)",
    objectFit: "cover",
  },
  threeImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 40,
    gap: 30,
  },
  smallImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
    shadow: "0 2 4 rgba(0, 0, 0, 0.1)",
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 30,
    textAlign: "center",
  },
  missionSection: {
    marginBottom: 35,
    padding: 25,
    backgroundColor: "#f0fdf4",
    borderRadius: 12,
    borderLeft: "4 solid #059669",
    shadow: "0 2 4 rgba(0, 0, 0, 0.05)",
  },
  whoWeAreSection: {
    marginBottom: 25,
    padding: 20,
    backgroundColor: "#fefefe",
    borderRadius: 12,
    border: "1 solid #e5e7eb",
    shadow: "0 2 4 rgba(0, 0, 0, 0.05)",
  },
  section: {
    marginBottom: 25,
    padding: 20,
    backgroundColor: "#fefefe",
    borderRadius: 12,
    border: "1 solid #e5e7eb",
    shadow: "0 2 4 rgba(0, 0, 0, 0.05)",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#059669",
    marginBottom: 20,
    borderBottom: "2 solid #059669",
    paddingBottom: 10,
    position: "relative",
  },
  paragraph: {
    fontSize: 13,
    color: "#374151",
    lineHeight: 1.6,
    marginBottom: 15,
  },
  bulletList: {
    marginLeft: 15,
    marginBottom: 15,
  },
  bulletItem: {
    fontSize: 10,
    color: "#4b5563",
    marginBottom: 6,
    lineHeight: 1.4,
  },
  expertiseGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  expertiseItem: {
    width: "48%",
    padding: 15,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    border: "1 solid #e5e7eb",
    marginBottom: 15,
    shadow: "0 1 3 rgba(0, 0, 0, 0.1)",
  },
  expertiseTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#059669",
    marginBottom: 8,
  },
  expertiseDesc: {
    fontSize: 9,
    color: "#6b7280",
    lineHeight: 1.4,
  },
  projectGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  projectGridItem: {
    width: "48%",
    marginBottom: 12,
  },
  projectCard: {
    padding: 12,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    border: "1 solid #e5e7eb",
    shadow: "0 1 3 rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 6,
  },
  projectDescription: {
    fontSize: 8,
    color: "#6b7280",
    lineHeight: 1.3,
    marginBottom: 6,
  },
  projectMeta: {
    fontSize: 7,
    color: "#9ca3af",
    fontStyle: "italic",
  },
  contactInfo: {
    padding: 20,
    backgroundColor: "#f0fdf4",
    borderRadius: 12,
    borderLeft: "4 solid #059669",
    marginTop: 20,
    shadow: "0 2 4 rgba(0, 0, 0, 0.05)",
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#059669",
    marginBottom: 15,
  },
  contactItem: {
    fontSize: 10,
    color: "#374151",
    marginBottom: 8,
    paddingLeft: 10,
    borderLeft: "2 solid #059669",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  statBox: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f0fdf4",
    borderRadius: 8,
    border: "1 solid #d1fae5",
    shadow: "0 1 3 rgba(0, 0, 0, 0.1)",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#059669",
    textAlign: "center",
  },
  statLabel: {
    fontSize: 9,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 4,
  },
  decorativeLine: {
    height: 2,
    backgroundColor: "#059669",
    marginVertical: 15,
    borderRadius: 1,
  },
  highlightBox: {
    padding: 15,
    backgroundColor: "#fef3c7",
    borderRadius: 8,
    border: "1 solid #f59e0b",
    marginVertical: 10,
  },
  highlightText: {
    fontSize: 10,
    color: "#92400e",
    fontStyle: "italic",
    textAlign: "center",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
    padding: 20,
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    border: "1 solid #e5e7eb",
    shadow: "0 2 4 rgba(0, 0, 0, 0.05)",
  },
  bottomImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    shadow: "0 2 4 rgba(0, 0, 0, 0.1)",
  },
});

const Brochure = () => (
  <Document>
    {/* Page 1: Simple Hero with Title, Mission, and Picture */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold" }}>
            S
          </Text>
        </View>
        <View>
          <Text style={styles.title}>SimEng</Text>
          <Text style={styles.subtitle}>
            Computational Green Material Design
          </Text>
          <Text style={styles.tagline}>
            Leading Sustainable Materials Research
          </Text>
        </View>
      </View>

      {/* Main Content - Image at Top, Mission, Image at Bottom */}
      <View style={{ flex: 1 }}>
        {/* Image at Top */}
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image src={AdventureImage} style={styles.smallImage} />
        </View>

        {/* Mission Section */}
        <View style={styles.missionSection}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            To accelerate the transition toward a sustainable future by
            engineering nature-inspired materials using advanced simulations and
            in silico design. We aim to transform industries with computational
            material innovation that meets the demands of tomorrow's green
            economy.
          </Text>
        </View>

        {/* Image at Bottom */}
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Image src={MedicalResearchImage} style={styles.smallImage} />
        </View>
      </View>
    </Page>

    {/* Page 2: Who We Are */}
    <Page size="A4" style={styles.page}>
      {/* Header for Page 2 */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold" }}>
            S
          </Text>
        </View>
        <View>
          <Text style={styles.title}>SimEng</Text>
          <Text style={styles.subtitle}>Who We Are</Text>
        </View>
      </View>

      {/* Who We Are Section */}
      <View style={styles.whoWeAreSection}>
        <Text style={styles.sectionTitle}>Who We Are</Text>
        <Text style={styles.paragraph}>
          At SimEng, we are a team of forward-thinking material scientists
          specializing in computational modeling. Our expertise spans:
        </Text>

        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            • Molecular dynamics simulations
          </Text>
          <Text style={styles.bulletItem}>• Multi-scale modeling</Text>
          <Text style={styles.bulletItem}>• Sustainable material design</Text>
        </View>

        <Text style={styles.paragraph}>
          We bridge the gap between virtual simulations and real-world
          applications to create materials that are:
        </Text>

        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• Environmentally friendly</Text>
          <Text style={styles.bulletItem}>• Efficient</Text>
          <Text style={styles.bulletItem}>• Scalable for industry</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>
            With over 15+ research collaborations and 70+ scientific
            publications, we have established ourselves as leaders in
            computational material science.
          </Text>
        </View>

        {/* Team Spirit Image */}
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image src={TeamSpiritImage} style={styles.smallImage} />
        </View>
      </View>
    </Page>

    {/* Page 3: Core Expertise */}
    <Page size="A4" style={styles.page}>
      {/* Header for Page 3 */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold" }}>
            S
          </Text>
        </View>
        <View>
          <Text style={styles.title}>SimEng</Text>
          <Text style={styles.subtitle}>Core Expertise</Text>
        </View>
      </View>

      {/* Core Expertise Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Expertise</Text>

        <View style={styles.expertiseGrid}>
          <View style={styles.expertiseItem}>
            <Text style={styles.expertiseTitle}>1. Computational Modeling</Text>
            <Text style={styles.expertiseDesc}>
              Advanced simulations from atoms to structures for predicting
              material behavior.
            </Text>
          </View>
          <View style={styles.expertiseItem}>
            <Text style={styles.expertiseTitle}>
              2. Sustainable Green Materials
            </Text>
            <Text style={styles.expertiseDesc}>
              Designing eco-conscious, nature-inspired materials for industrial
              use.
            </Text>
          </View>
          <View style={styles.expertiseItem}>
            <Text style={styles.expertiseTitle}>
              3. Carbon Capture Technologies
            </Text>
            <Text style={styles.expertiseDesc}>
              Modeling nano-enhanced membranes and systems for industrial CO₂
              reduction.
            </Text>
          </View>
          <View style={styles.expertiseItem}>
            <Text style={styles.expertiseTitle}>4. Bio-based Composites</Text>
            <Text style={styles.expertiseDesc}>
              Using biochar from agricultural waste for polymer enhancements.
            </Text>
          </View>
          <View style={styles.expertiseItem}>
            <Text style={styles.expertiseTitle}>5. Acoustic Materials</Text>
            <Text style={styles.expertiseDesc}>
              Optimizing nanofiber networks for high-performance sound
              insulation.
            </Text>
          </View>
          <View style={styles.expertiseItem}>
            <Text style={styles.expertiseTitle}>6. Metamaterial Design</Text>
            <Text style={styles.expertiseDesc}>
              Architectural materials with tailored acoustic and mechanical
              properties.
            </Text>
          </View>
        </View>
      </View>

      {/* Images */}
      <View style={styles.imagesContainer}>
        <Image src={MethodXImage} style={styles.bottomImage} />
        <Image src={NanoImage} style={styles.bottomImage} />
      </View>
    </Page>

    {/* Page 4: Projects and Contact */}
    <Page size="A4" style={styles.page}>
      {/* Header for Page 4 */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold" }}>
            S
          </Text>
        </View>
        <View>
          <Text style={styles.title}>SimEng</Text>
          <Text style={styles.subtitle}>Projects & Contact</Text>
        </View>
      </View>

      {/* Featured Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>

        <View style={styles.projectGrid}>
          <View style={styles.projectGridItem}>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>1. NANOMEC</Text>
              <Text style={styles.projectDescription}>
                Polymer Nanocomposites | Marie Curie Fellowship Breakthrough in
                understanding polymer-nanoparticle mechanics.
              </Text>
              <Text style={styles.projectMeta}>Excellence Score: 95/100</Text>
            </View>
          </View>

          <View style={styles.projectGridItem}>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>2. ECHOLAYER</Text>
              <Text style={styles.projectDescription}>
                Sustainable Nanofibers for Sound Insulation Achieved 40%
                improvement in sound absorption.
              </Text>
            </View>
          </View>

          <View style={styles.projectGridItem}>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>3. AgReCOMPOSITES</Text>
              <Text style={styles.projectDescription}>
                Biochar-based Circular Composites Reduced carbon footprint by
                60%.
              </Text>
            </View>
          </View>

          <View style={styles.projectGridItem}>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>4. Nano-CarbonCapS</Text>
              <Text style={styles.projectDescription}>
                Portable Carbon Capture Systems CO₂ capture efficiency of 85%.
              </Text>
            </View>
          </View>

          <View style={styles.projectGridItem}>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>5. BIOLEA</Text>
              <Text style={styles.projectDescription}>
                Bio-Based Leather Alternatives Reduced environmental impact by
                90% for fashion/interior use.
              </Text>
            </View>
          </View>

          <View style={styles.projectGridItem}>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>6. METAMAT</Text>
              <Text style={styles.projectDescription}>
                Bio-inspired Metamaterials Designed for unprecedented sound
                control and mechanical performance.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.decorativeLine} />

      {/* Contact Section with Image */}
      <View style={styles.contactInfo}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          {/* Contact Image */}
          <View style={{ alignItems: "center" }}>
            <Image
              src={ContactUsImage}
              style={{
                width: 60,
                height: 60,
                borderRadius: 8,
                shadow: "0 2 4 rgba(0, 0, 0, 0.1)",
              }}
            />
          </View>

          {/* Contact Information */}
          <View style={{ flex: 1 }}>
            <Text style={styles.contactTitle}>Contact Us</Text>
            <Text style={styles.contactItem}>
              Email: simulation.engineering.leb@gmail.com
            </Text>
            <Text style={styles.contactItem}>Phone: +961 70 641 508</Text>
            <Text style={styles.contactItem}>
              Address: Bchemoun Schools Street, Almanzal Residence Building
            </Text>
            <Text style={styles.contactItem}>Website: simeng.live</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Brochure;
