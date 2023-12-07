import LogtoClient from '@logto/browser';

const logtoClient = new LogtoClient({
	appId: "rsus3iuhs9y1tgqhvz8gq",
	endpoint: "https://ira9k5.logto.app/",
});
	
logtoClient.signIn("http://localhost:3000/callback");
