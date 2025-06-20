import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#6B53FF',
  },
  sectionTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginHorizontal: 8,
  },
  tabButtonActive: {
    borderBottomColor: '#6B53FF',
    backgroundColor: '#D8D1FF',
    borderRadius: 12,
  },
  tabText: {
    fontSize: 20,
    color: 'black',
  },
  tabTextActive: {
    color: '#6B53FF',
    fontWeight: 'bold',
  },
  sectionContent: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 0,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  messageCardUnread: {
    backgroundColor: '#FFF4F4',
  },
  proPic: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eee',
  },
  sender: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  preview: {
    fontSize: 15,
    color: '#555',
    marginTop: 2,
  },
  // Nuovi stili filtro messaggi
  filterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginHorizontal: 6,
  },
  filterButtonActive: {
    backgroundColor: '#6B53FF',
  },
  filterText: {
    fontSize: 16,
    color: '#000',
  },
  filterButtonActiveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
