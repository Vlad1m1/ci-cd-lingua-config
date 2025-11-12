import LanguagePanel from "@components/AdminPanel/LanguagePanel";
import TabbedContainer, { TabConfig } from "@components/TabbedContainer";


const AdminPage = () => {
	const tabConfig: TabConfig[] = [
		{ id: "languages", label: "Язык", component: LanguagePanel },
	];

	return <TabbedContainer config={tabConfig} />;
};

export default AdminPage;
