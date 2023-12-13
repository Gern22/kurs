import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null)

export default function UserContextProvider({children}){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const changeUserPreferences = (newPreferences) => {

    // Используем оператор распыления для добавления каждого элемента массива в предпочтения
    const updatedPreferences = newPreferences.length ? [...user.preferences, ...newPreferences] : user.preferences;

    // Используем Set, чтобы удалить возможные дубликаты
    const uniquePreferences = Array.from(new Set(updatedPreferences));

    setUser({
      ...user,
      preferences: uniquePreferences,
    });
  };


  useEffect(() => {
    setLoading(true)
    const id = localStorage.getItem("userId");

    // TODO need to fetch user by id
    if(id){
      fetch(`http://localhost:5001/users?id=${id}`)
        .then((r) => r.json())
        .then((users) => users[0])
        .then(user => {
          setUser(user)
          setLoading(false)
        })
        .finally((err) => {
          setLoading(false)
        })
    } else{
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if(user?.id){
      localStorage.setItem('userID', user.id)
    }
  }, [user?.id]);

  return (
    <UserContext.Provider value={{user, onChange: setUser, loading, changeUserPreferences}}>
      {children}
    </UserContext.Provider>
  )
}
