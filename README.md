# React Native FlatList Empty List Bug

This repository demonstrates a bug where a FlatList in React Native renders an empty list after a delayed update to its data source.  The issue occurs when the data update happens after the initial render, causing the component to not re-render properly. The solution involves key management within the FlatList component.