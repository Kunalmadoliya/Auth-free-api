import { useEffect, useState } from "react";

const GetUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://api.freeapi.app/api/v1/users/current-user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default GetUser;