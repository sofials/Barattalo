import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ChatItem {
  id: string;
  nome: string;
  ultimoMessaggio: string;
  avatar: string;
  orario: string;
  nonLetti: number;
}

const chatData: ChatItem[] = [
  {
    id: '1',
    nome: 'Mario Rossi',
    ultimoMessaggio: 'Ciao! Sei ancora interessato?',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    orario: '12:30',
    nonLetti: 2,
  },
  {
    id: '2',
    nome: 'Giulia Bianchi',
    ultimoMessaggio: 'Grazie mille!',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    orario: '11:15',
    nonLetti: 0,
  },
  // Aggiungi altre chat di esempio se vuoi
];

const Chat: React.FC = () => {
  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.orario}>{item.orario}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.ultimoMessaggio} numberOfLines={1}>
            {item.ultimoMessaggio}
          </Text>
          {item.nonLetti > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.nonLetti}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 16,
    backgroundColor: '#eee',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  orario: {
    fontSize: 12,
    color: '#888',
    marginLeft: 8,
  },
  ultimoMessaggio: {
    fontSize: 14,
    color: '#555',
    flex: 1,
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#3cb371',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 86,
  },
});

export default Chat;