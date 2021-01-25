const xml_data = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<record>
		<ID>1</ID>
		<Board>MSB</Board>
		<Class>1</Class>
		<ClassCategory>Primary</ClassCategory>
		<Subject>Marathi</Subject>
		<Chapter>Chapter: 1-Yet Ani Yet Nahi</Chapter>
		<Description>Yet Ani Yet Nahi is a story about two girls</Description>
	</record>
	<record>
		<ID>2</ID>
		<Board>MSB</Board>
		<Class>1</Class>
		<ClassCategory>Primary</ClassCategory>
		<Subject>Marathi</Subject>
		<Chapter>Chapter: 2-Yamuchi Safar</Chapter>
		<Description>Yamuchi Safar is poem about yamu</Description>
	</record>
	<record>
		<ID>3</ID>
		<Board>MSB</Board>
		<Class>1</Class>
		<ClassCategory>Primary</ClassCategory>
		<Subject>Marathi</Subject>
		<Chapter>Chapter: 3-Tahanlela Kavla</Chapter>
		<Description>Tahanlela Kavla is story about thrusty crow</Description>
	</record>
	<record>
		<ID>4</ID>
		<Board>MSB</Board>
		<Class>1</Class>
		<ClassCategory>Primary</ClassCategory>
		<Subject>Marathi</Subject>
		<Chapter>Chapter: 4-Lapachapi</Chapter>
		<Description>Lapachapi is story about game</Description>
	</record>
	</content>`;

const videos_xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
	<content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
		<record>
			<ID>1</ID>
			<VideoTitle>Yet Ani Yet Nahi</VideoTitle>
			<IsOnline>0</IsOnline>
			<URI>require("../assets/videos/YET_ANI_YET_NAHI.mp4")</URI>
			<Provider>1</Provider>
			<References>1,2</References>
			<Description>The Video covers story of two village girls</Description>
		</record>
		<record>
			<ID>2</ID>
			<VideoTitle>Yamuchi Safar</VideoTitle>
			<IsOnline>0</IsOnline>
			<URI>require("../assets/videos/Yamuchi_Safar.mp4")</URI>
			<Provider>1</Provider>
			<References>1,2</References>
			<Description>The video cexplains about jungal safari</Description>
		</record>
		<record>
			<ID>3</ID>
			<VideoTitle>Welcome Song</VideoTitle>
			<IsOnline>1</IsOnline>
			<URI>https://www.digitalsakshar.com/TopicSelection?competencyid=CMP780</URI>
			<Provider>2</Provider>
			<Description>Our first lesson is also a ‘Welcome Song’. So let’s start singing this wonderful poem. Sing a welcome song Ring a joyful bell. Ding dong ding everybody sing For a new day begins. Come together one and all Ding dong ding dong ding dong ding. Happy song of joy we bring Ding dong ding dong ding dong ding. Everyday is a new day and we should always be hopeful that every new day will bring happiness to us</Description>
		</record>
		<record>
			<ID>4</ID>
			<VideoTitle>ENGLISH WORDS WE KNOW</VideoTitle>
			<IsOnline>1</IsOnline>
			<URI>https://www.digitalsakshar.com/TopicSelection?competencyid=CMP782</URI>
			<Provider>2</Provider>
			<Description>Do you know what we are going to learn today? Today we will learn the names of a few things we usually see in our day to day life. I will show you some pictures and you have to tell me what object it is.</Description>
		</record>
	</content>`;

const readings_xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<record>
		<ID>1</ID>
		<ReadingTitle>Where do they go</ReadingTitle>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/readings/ceen102.pdf")</URI>
		<Provider>2</Provider>
		<Description>Story about two friends who lost in town</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>2</ID>
		<ReadingTitle>Too big too small</ReadingTitle>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/readings/ceen103.pdf")</URI>
		<Provider>2</Provider>
		<Description>Story about fresh watermelon from riverside</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>3</ID>
		<ReadingTitle>Simple counting</ReadingTitle>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/readings/ceen104.pdf")</URI>
		<Provider>2</Provider>
		<Description>Learning of counting from game</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>4</ID>
		<ReadingTitle>Rainbow visits the village</ReadingTitle>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/readings/ceen105.pdf")</URI>
		<Provider>2</Provider>
		<Description>story about rainbow in village</Description>
		<References>reference link, if any</References>
	</record>
</content>`;

const assignments_xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<record>
		<ID>1</ID>
		<Title>Write down the your intake from story</Title>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/assignments/ceen102.pdf")</URI>
		<Provider>1</Provider>
		<Description>Read the complete story and write down your intake and learning from story in 50 words</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>2</ID>
		<Title>Write down the your intake from story</Title>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/assignments/ceen103.pdf")</URI>
		<Provider>1</Provider>
		<Description>Read the complete story and write down your intake and learning from story in 50 words</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>3</ID>
		<Title>Write down the your intake from story</Title>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/assignments/ceen104.pdf")</URI>
		<Provider>1</Provider>
		<Description>Read the complete story and write down your intake and learning from story in 50 words</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>4</ID>
		<Title>Write down the your intake from story</Title>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/assignments/ceen105.pdf")</URI>
		<Provider>1</Provider>
		<Description>Read the complete story and write down your intake and learning from story in 50 words</Description>
		<References>reference link, if any</References>
	</record>
</content>`;

const quizzes_xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<record>
		<ID>1</ID>
		<Title>How many colors in rainbow?</Title>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/quizzes/ceen102.pdf")</URI>
		<Provider>1</Provider>
		<Description>Description of reading</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>2</ID>
		<Title>When rainbow can seen?</Title>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/quizzes/ceen103.pdf")</URI>
		<Provider>1</Provider>
		<Description>Description of reading</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>3</ID>
		<Title>Who was thursty?</Title>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/quizzes/ceen104.pdf")</URI>
		<Provider>1</Provider>
		<Description>Description of reading</Description>
		<References>reference link, if any</References>
	</record>
	<record>
		<ID>4</ID>
		<Title>How many friends went to town?</Title>
		<IsOnline>0</IsOnline>
		<URI>require("../assets/quizzes/ceen105.pdf")</URI>
		<Provider>1</Provider>
		<Description>Description of reading</Description>
		<References>reference link, if any</References>
	</record>
</content>`;
	
const syllabus_xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
	<content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
		<record>
			<ID>1</ID>
			<ChapterID>1</ChapterID>
			<Videos>1,2</Videos>
			<Readings>1,2</Readings>
			<Assignments>1,2,3</Assignments>
			<Quizzes>1</Quizzes>
		</record>
		<record>
			<ID>2</ID>
			<ChapterID>2</ChapterID>
			<Videos>1,2</Videos>
			<Readings>1,2</Readings>
			<Assignments>1,2,3</Assignments>
			<Quizzes>1</Quizzes>
		</record>
		<record>
			<ID>3</ID>
			<ChapterID>3</ChapterID>
			<Videos>1,2</Videos>
			<Readings>1,2</Readings>
			<Assignments>1,2,3</Assignments>
			<Quizzes>1</Quizzes>
		</record>
	</content>`;
	


export default {xml_data,videos_xml,syllabus_xml,readings_xml,assignments_xml,quizzes_xml};