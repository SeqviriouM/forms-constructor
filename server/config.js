export default function getConfig() {
  return {
    db: {
      development: 'mongodb://localhost:27017/form-constructor',
      test: 'mongodb://localhost:27017/form-sonstructor',
      production: 'mongodb://localhost:27017/form-constructor',
    },
  };
}
