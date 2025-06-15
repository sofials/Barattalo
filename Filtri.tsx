import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { categories } from './AnnunciContext';
import styles from './Filtri.styles';

import RestartIcon from './icons/icons8-restart.svg';

type FiltriProps = {
  visible: boolean;
  onClose: () => void;
  onApply: (selectedCategories: string[], distanceKm: number) => void;
  initialCategories: string[];
  initialDistance: number;
};

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Filtri: React.FC<FiltriProps> = ({
  visible,
  onClose,
  onApply,
  initialCategories,
  initialDistance,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
  const [distanceKm, setDistanceKm] = useState<number>(initialDistance);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const resetDistance = () => {
    setDistanceKm(100);
  };

  const resetAllFilters = () => {
    setSelectedCategories([]);
    setDistanceKm(100);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer, { maxHeight: screenHeight * 0.7, width: screenWidth * 0.9 }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Filtri</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          {/* ScrollView solo per le categorie con altezza massima */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: 200 }}
          >
            <Text style={styles.sectionTitle}>Categorie</Text>
            <View style={styles.categoriesContainer}>
              {categories.map(category => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <TouchableOpacity
                    key={category}
                    onPress={() => toggleCategory(category)}
                    activeOpacity={0.7}
                    style={isSelected ? styles.pillSelected : styles.pillNonSelected}
                  >
                    <Text style={isSelected ? styles.pillSelectedText : styles.pillNonSelectedText}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Slider e pulsanti fuori dallo ScrollView */}
          <View style={{ marginTop: 15 }}>
            <View style={styles.distanceContainer}>
              <Text style={styles.distanceText}>
                Distanza (km): {distanceKm.toFixed(1)}
              </Text>
              <TouchableOpacity
                onPress={resetDistance}
                style={styles.resetIcon}
                activeOpacity={0.7}
              >
                <RestartIcon width={20} height={20} />
              </TouchableOpacity>
            </View>

            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={100}
              step={0.5}
              value={distanceKm}
              onValueChange={setDistanceKm}
              minimumTrackTintColor="#2B31BA"
              maximumTrackTintColor="#d8d1ff"
              thumbTintColor="#2B31BA"
            />

            {(selectedCategories.length > 0 || distanceKm !== 100) && (
              <TouchableOpacity
                onPress={resetAllFilters}
                style={styles.resetAllButton}
                activeOpacity={0.7}
              >
                <Text style={styles.resetAllText}>
                  Rimuovi tutti i filtri
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => onApply(selectedCategories, distanceKm)}
              activeOpacity={0.8}
            >
              <Text style={styles.applyButtonText}>Applica</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Filtri;
