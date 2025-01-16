```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, title: `Item ${i + 1}` }));

const MyComponent = () => {
  const [items, setItems] = useState(DATA);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setItems(DATA.filter(item => item.id % 2 === 0));
      setLoading(false);
    }, 3000);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );

  const keyExtractor = (item) => item.id.toString();

  if(loading) return <Text>Loading...</Text>;
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<Text>No items found</Text>}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  list: {
    flex: 1
  }
});

export default MyComponent; 
```