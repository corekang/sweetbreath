import { useEffect } from "react";

export default function NewsPage() {
  useEffect(() => {
    fetch("/register", {
      method: "Post",
      body: {
        username: "annann",
        password: "QQQ",
        nickname: "安安",
        email: "annann@123.com",
      },
    })
      .then((res) => console.log("安安你好", res))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>NEWS</div>;
}
