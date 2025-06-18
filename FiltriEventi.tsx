import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { categorie } from './EventiContext';  
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

const FiltriEventi: React.FC<FiltriProps> = ({
  visible,
  onClose,
  onApply,
  initialCategories,
  initialDistance,
}) => {
  // Inizializzo lo stato con i valori iniziali passati da props
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
  const [distanceKm, setDistanceKm] = useState<number>(initialDistance);

  // Se cambiano i props (es. riapri i filtri), aggiorno lo stato interno per rifletterli
  useEffect(() => {
    setSelectedCategories(initialCategories);
    setDistanceKm(initialDistance);
  }, [initialCategories, initialDistance, visible]);

  // Funzione per selezionare/deselezionare una categoria
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Resetta la distanza al massimo (100 km)
  const resetDistance = () => {
    setDistanceKm(100);
  };

  // Resetta tutte le scelte (categorie vuote, distanza max)
  const resetAllFilters = () => {
    setSelectedCategories([]);
    setDistanceKm(100);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalBackground}>
        <View
          style={[
            styles.modalContainer,
            { maxHeight: screenHeight * 0.7, width: screenWidth * 0.9 },
          ]}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Filtri</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Scroll categorie */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: 200 }}
          >
            <Text style={styles.sectionTitle}>Categorie</Text>
            <View style={styles.categoriesContainer}>
              {categorie.map(category => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <TouchableOpacity
                    key={category}
                    onPress={() => toggleCategory(category)}
                    activeOpacity={0.7}
                    style={isSelected ? styles.pillSelected : styles.pillNonSelected}
                  >
                    <Text
                      style={
                        isSelected ? styles.pillSelectedText : styles.pillNonSelectedText
                      }
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Slider distanza e reset */}
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

            {/* Pulsante per rimuovere tutti i filtri */}
            {(selectedCategories.length > 0 || distanceKm !== 100) && (
              <TouchableOpacity
                onPress={resetAllFilters}
                style={styles.resetAllButton}
                activeOpacity={0.7}
              >
                <Text style={styles.resetAllText}>Rimuovi tutti i filtri</Text>
              </TouchableOpacity>
            )}

            {/* Pulsante Applica */}
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

export default FiltriEventi;
