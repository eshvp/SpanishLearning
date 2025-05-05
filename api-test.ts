import { translateApi, audioApi, textApi } from './shared/api/index.ts';


async function testApiLayer() {
  try {
    console.log('Testing API Layer...');
    
    // Test translation API
    console.log('\n--- Testing Translation API ---');
    const translationResult = await translateApi.translate('Hello, how are you? My name is Max', 'ES');
    console.log('Translation result:', translationResult);
    
    // Test text normalization API
    console.log('\n--- Testing Text Normalization API ---');
    const normalizeResult = await textApi.normalize('Hóla cómo estás');
    console.log('Normalized text:', normalizeResult);
    
    // Note: Testing audio APIs from CLI is more complex as they involve files
    // This is a simplified example that won't work directly in terminal
    console.log('\n--- Audio APIs require actual files, skipping direct test ---');
    
    console.log('\nAll available API tests completed!');
  } catch (error) {
    console.error('API Test Failed:', error);
  }
}

// Run the test
testApiLayer();