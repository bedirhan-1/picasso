import { makeNameStringCorrect } from "../(helpers)";
import myUser from "../actions/getUser";

const User = async () => {
    const myCurrentUser = await myUser()
    const name = myCurrentUser?.name?.split(" ")[0]

    return (
        <>
            {myCurrentUser ? (
                <div className="h-screen">
                    <h1 className=" text-slate-700 font-semibold text-center mt-10">
                        Merhaba {makeNameStringCorrect(name || "")}
                    </h1>
                </div>
            ) : (
                <div>
                    Profilinizi görüntülemek, poliçe isteği oluşturmak ve oluşturulmuş poliçelerinizi görüntüleyebilmek için lütfen giriş yapınız.
                </div>
            )}
        </>
    );
}

export default User;