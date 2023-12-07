import LogtoClient from '@logto/browser';

const logtoClient = new LogtoClient({
	appId: "abc",
	endpoint: "https://abc.logto.app/",
});
	
logtoClient.signIn("http://localhost:3000/callback");
