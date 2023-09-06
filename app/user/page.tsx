import { makeNameStringCorrect } from "../(helpers)";
import myUser from "../actions/getUser";
import { SafeUser } from "../types";

interface Props {
    myUser: SafeUser | null;
}

const User: React.FC<Props> = async () => {
    const myCurrentUser = await myUser()


    return (
        <>
            {myCurrentUser ? (
                <div className="h-screen">
                    <h1 className=" text-slate-700 font-semibold text-center mt-10">
                        Merhaba {makeNameStringCorrect(myCurrentUser.name ?? "") + " " + makeNameStringCorrect(myCurrentUser.surname ?? "")}
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