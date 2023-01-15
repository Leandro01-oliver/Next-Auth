export default {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,
	client_id: process.env.CLIENT_ID || '',
	client_secret: process.env.CLIENT_SECRET || '',
	certificate: process.env.CERTIFICATE || '',
};

