genere_astuces();
	
	function genere_astuces()
	{
		let tab_astuces = liste_astuces().split('|');
		let nb_astuces = tab_astuces.length;
		let nombre_alea = Math.floor(Math.random() * nb_astuces);
		
		//alert(nombre_alea);

		document.getElementById('calque_astuce').innerHTML = tab_astuces[nombre_alea];
	
	}
function liste_astuces()
{
	let chaine="<strong>Accompagner</strong> veut également dire <strong>observer</strong>. Dans ce contexte, l'adulte observe l'enfant pour être en mesure d'intéragir individuellement avec lui et de façon planifiée, au moment opportun.| \
	Les activités proposées encouragent l'apprentissage actif lorsqu'elles sont liées aux: <strong>intérêts ponctuels des enfants</strong>.| \
	Un <strong>traumatisme</strong> est une atteinte <strong>corporelle</strong>; cela peut être des brûlures, plaies, piqûres, fractures, entorses, etc.| \
	<strong>RCP</strong> signifie , Réanimation cardio-pulmonaire.| \
	<strong>PLS</strong> signifie , Position latérale de sécurité.| \
	Il faut diluer le produit dans l'eau et non l'eau dans le produit.| \
	Un produit <strong>bactériostatique</strong> empêche le développement des bactéries alors qu'un produit <strong>bactéricide</strong> les tue.| \
	Entre <strong>1 et 3 ans</strong> l'idéal est de maintenir un apport de <strong>500 à 600ml</strong> de lait par jour.| \
	Les yaourts sucrés du commerce contiennent environ 15g de sucre, soit <strong>3 morceaux de sucre</strong>.| \
	Les troubles du contrôle des sphincters sont <strong>l'encoprésie</strong> pour le contrôle des selles et <strong>l'énurésie</strong> pour le contrôle urinaire.| \
	Depuis 2005, la <strong>langue des signes française (LSF)</strong> est reconnue comme une langue à part entière. Tout élève concerné (sourd, malentendant ou non) peut bénéficier d'un enseignement en langue des signes.| \
	Les <strong>rythmies</strong> d'endormissement sont des mouvements de la tête et du corps qui surviennent pendant le sommeil (fréquentes chez les nourrissons).| \
	Comment calculer la dose de produit? Pour un seau de <strong>10 litres</strong> et un produit dilué à <strong>5/100</strong>: Quantité de produit: 10X5/100= <strong>0,5 litre</strong>, soit 500 ml. Cette méthode de calcul s'applique à toutes les dissolutions!| \
	<strong>Les accidents domestiques</strong> touchent essentiellement les enfants de 0 à 5 ans et plus particulièrement autour de <strong>2 ans</strong>. Ce sont le plus souvent des <strong>chutes</strong>.| \
	La déshydratation est une pathologie très grave qui peut mettre très rapidement la vie du jeune enfant en danger. La déshydratation doit <strong>se prévenir</strong> et non se guérir. Les causes principales sont: <strong>la diarrhée aigüe, la polyurie (excès d'émission d'urines), l'hyperthermie (perte d'eau suite coup de chaleur ou fièvre) et les vomissements</strong>.| \
	La maturation du système nerveux est quasiment terminée vers l'âge de <strong>2 et 3 ans</strong> avec la maturité des sphincters urinaires et anaux. C'est l'âge de l'acquisition d la propreté.| \
	L'usage de trotteur n'aide pas l'enfant à se muscler et à sentir sa capacité à marcher. Son usage n'est pas recommandé en dehors de jeux ponctuels proposés à l'enfant. Pour l'aider à acquérir la marche, on doit lui montrer qu'on <strong>lui fait confiance</strong> et le laisser <strong>aller à son rythme</strong>.| \
	A 18 mois, un enfant pèse <strong>environ 12kg</strong> et a une dentition pouvant s'élever <strong>à une douzaine</strong> de dents (8 incisives ainsi que 4 prémolaires). Les canines apparaissent vers l'âge de 2 ans.| \
	On dit d'un enfant qu'il <strong>somatise</strong> quand il témoigne par une maladie d'une perturbation psychoaffective possible. De multiples maux peuvent permettre à l'enfant de témoigner d'un trouble psychoaffectif: <strong>maux de ventre, maladies de peau, troubles respiratoires, otites à répétitions...</strong>. La sensibilité aux maladies est liée aux problèmes familiaux de l'enfance.| \
	A 3 ans, un enfant sait généralement: copier un rond, désigner 2 couleurs, placer 2 à 3 éléments de puzzle adapté à sonâge. <strong>L'intelligence préopératoire</strong> s'amorce à cette période. Compter jusqu'à 10 est une opération difficile à un âge où la pensée est encore peu élaborée.| \
	Un dessin complet montre que l'enfant a acquis son shéma corporel car toutes les parties du corps sont dessinées, alors qu'avant il ne dessinait que <strong>la grosse tête</strong> de l'adulte se penchant sur lui! Il imagine donc aussi <strong>le tronc</strong>.| \
	<strong>La vitamine C</strong> est un nutriment important de la croissance. Le besoin d'un enfant de 4 à 6 ans se situe autour de <strong>40 mg/jour</strong>. Cette vitamine est à consommer tous les jours sous forme de légumes et fruits crus.| \
	L'atelier de <strong>peinture</strong> permet à l'enfant de développer la précision de ses gestes et de développer les sensations du toucher. Cette précision va servir plus tard à <strong>former des lettres</strong>.| \
	<strong>Le développement somatique</strong> correspond à l'ensemble des phénomènes physiques qui contribuent à la<strong>croissance</strong> de l'enfant. Il concerne donc essentiellement <strong>la croissance staturo-pondérale<strong/>, soit l'évaluation de son poids et de sa taille.| \
	Un enfant qui peut <strong>se mouvoir librement</strong> sur un tapis de sol change de position <strong>toutes les 3 minutes</strong> et développe ainsi la connaissance de son corps, de ses potentialités et de l'espace.| \
	Au cours de la petite enfance, les enfants présentent souvent une <strong>néophobie</strong>: ils évitent des aliments nouveaux. Cette phase est normale et observée chez tous les enfants. Seule la familiarisation répétée du même aliment, permet à l'enfant de le considérer comme normal. Un aliment nouveau doit être présenté <strong>plus de 10 fois (parfois 20)</strong>, avant d'être accepté par le petit enfant.| \
	Pour les enfants nés <strong>à partir du 1er janvier 2018</strong>, les vaccins contre 11 maladies sont obligatoires au cours des 18 premiers mois: <strong>diphtérie,tétanos, poliomyélite, coqueluche, haemophilus influenzae de type b, hépathite B, méningocoque C, pneumocoque, rougeole, oreillons et rubéole (ROR)</strong>.| \
	<strong>Les microbes</strong> sont des micro-organismes, visibles au microscope. Ils sont aussi appelés germe car ils sont capables d'engendrer des maladies. Ils sont classés en 5 grandes catégories: <strong>les bactéries, les virus, les champignons, les parasites, les prions</strong>.| \
	L'utilisation prolongée des biberons, en exposant les dents à des liquides sucrés, risque de provoquer des <strong>caries</strong>. C'est ce qu'on appelle <strong>les caries du biberon</strong>, chez les enfants âgés de 18 à 24 mois.| \
	A la naissance, le nouveau-né mesure environ <strong>50 cm</strong>. Il double sa taille de naissance à <strong>4 ans</strong>. \
	";
	
return chaine;
}