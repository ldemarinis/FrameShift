import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { FeedScreen } from '../screens/FeedScreen';
import { CovesScreen } from '../screens/CovesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { colors, typography, shadows } from '../tokens';

const Tab = createBottomTabNavigator();

function DropFAB({ onPress }: { onPress?: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={styles.fabContainer}>
      <LinearGradient
        colors={['#FF4F35', '#FFB830']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.fab}
      >
        <Text style={styles.fabIcon}>+</Text>
      </LinearGradient>
      <Text style={styles.fabLabel}>Drop</Text>
    </TouchableOpacity>
  );
}

function TabBar({ state, descriptors, navigation }: any) {
  const leftTabs = state.routes.slice(0, 2);
  const rightTabs = state.routes.slice(3);

  const TabItem = ({ route, index, offset = 0 }: { route: any; index: number; offset?: number }) => {
    const isFocused = state.index === index + offset;
    const { options } = descriptors[route.key];
    const label = options.tabBarLabel ?? route.name;
    const icon = options.tabBarIcon?.({ focused: isFocused, color: '', size: 22 });

    return (
      <TouchableOpacity
        onPress={() => {
          const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
          if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
        }}
        style={styles.tabItem}
        activeOpacity={0.7}
      >
        <Text style={[styles.tabIcon, isFocused && styles.tabIconActive]}>{icon}</Text>
        <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tabBar}>
      {leftTabs.map((route: any, i: number) => (
        <TabItem key={route.key} route={route} index={i} />
      ))}
      <DropFAB />
      {rightTabs.map((route: any, i: number) => (
        <TabItem key={route.key} route={route} index={i} offset={3} />
      ))}
    </View>
  );
}

export function AppNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: () => '🏠',
        }}
      />
      <Tab.Screen
        name="Coves"
        component={CovesScreen}
        options={{
          tabBarLabel: 'Coves',
          tabBarIcon: () => '🎞️',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: () => '👤',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,251,245,0.92)',
    borderTopWidth: 1,
    borderTopColor: colors.neutral200,
    ...shadows.nav,
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 24,
    paddingHorizontal: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
    paddingTop: 4,
  },
  tabIcon: {
    fontSize: 22,
    opacity: 0.4,
  },
  tabIconActive: {
    opacity: 1,
  },
  tabLabel: {
    fontFamily: typography.familyBodySemi,
    fontWeight: typography.weightSemibold,
    fontSize: 10,
    color: colors.neutral400,
  },
  tabLabelActive: {
    color: colors.coral500,
  },
  fabContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: -28,
    gap: 3,
  },
  fab: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFBF5',
    ...shadows.button,
  },
  fabIcon: {
    fontSize: 28,
    color: 'white',
    lineHeight: 32,
  },
  fabLabel: {
    fontFamily: typography.familyBodySemi,
    fontWeight: typography.weightSemibold,
    fontSize: 10,
    color: colors.neutral400,
  },
});
