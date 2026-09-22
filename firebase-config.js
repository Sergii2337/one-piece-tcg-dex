// =========================================================================
// FIREBASE CONFIGURATION (One Piece TCG Pocket Dex)
// =========================================================================

const firebaseConfig = {
  apiKey: "AIzaSyA0_CA9Mxe4G8-t1TLyD4d8_HZfMrREgXw",
  authDomain: "one-piece-cards-dex.firebaseapp.com",
  projectId: "one-piece-cards-dex",
  storageBucket: "one-piece-cards-dex.firebasestorage.app",
  messagingSenderId: "853464346785",
  appId: "1:853464346785:web:df519b16b5a8970ed440e0",
  measurementId: "G-ZEP6W6Z5RL"
};

// Inicialización para navegadores sin bundler (Firebase Compat SDK)
if (typeof firebase !== 'undefined') {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    window.FIREBASE_AUTH = firebase.auth();
    window.FIREBASE_DB = firebase.firestore();
    window.IS_FIREBASE_READY = true;
    console.log("🔥 Firebase inicializado correctamente");
  } catch (error) {
    console.error("Error al inicializar Firebase:", error);
  }
}
