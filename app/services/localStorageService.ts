const localStorageService = {
  setItem: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem: <T>(key: string): T | null => {
    const item = localStorage.getItem(key)
    return item !== null && item !== undefined ? JSON.parse(item) : null
  },
  removeItem: (key: string): void => {
    localStorage.removeItem(key)
  }
}

export default localStorageService
