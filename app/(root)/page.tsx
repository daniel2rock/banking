import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = {firstName: 'Cyber', lastName: 'Tron', email: 'cybertron001@protonmail.com'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transaction Efficiently"

                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.30}
                    />
                </header>

                
                RECENT TRANSACTIONS 

            </div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:123.50}, {currentBalance:550.00}]}
            />
        </section>
    )
}

export default Home