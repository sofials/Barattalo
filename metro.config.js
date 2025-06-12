//me/ Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  // Get the default Expo Metro configuration
  // __dirname is the current directory, ensuring paths are resolved correctly
  const defaultConfig = await getDefaultConfig(__dirname);

  // Apply your existing SVG customizations to the Expo default configuration
  defaultConfig.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
  
  // Ensure assetExts and sourceExts are initialized on the defaultConfig.resolver if they aren't
  defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts || [];
  defaultConfig.resolver.sourceExts = defaultConfig.resolver.sourceExts || [];

  // Filter out 'svg' from assetExts (it's treated as a source file)
  defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg');
  
  // Add 'svg' to sourceExts
  if (!defaultConfig.resolver.sourceExts.includes('svg')) {
    defaultConfig.resolver.sourceExts.push('svg');
  }
  
  return defaultConfig;
})();