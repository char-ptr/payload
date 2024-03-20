export default {
  authentication: {
    account: 'Compte',
    apiKey: 'Clé API',
    enableAPIKey: 'Activer la clé API',
    newAccountCreated:
      'Un nouveau compte vient d\'être créé pour vous permettre d\'accéder <a href="{{serverURL}}">{{serverURL}}</a>. Veuillez cliquer sur le lien suivant ou collez l\'URL ci-dessous dans votre navigateur pour vérifier votre adresse e-mail: <a href="{{verificationURL}}">{{verificationURL}}</a><br>. Après avoir vérifié votre adresse e-mail, vous pourrez vous connecter avec succès.',
    resetYourPassword: 'Réinitialisez votre mot de passe',
    verified: 'Vérifié',
    verifyYourEmail: 'Vérifiez votre e-mail',
    youAreReceivingResetPassword:
      "Vous recevez ceci parce que vous (ou quelqu'un d'autre) avez demandé la réinitialisation du mot de passe de votre compte. Veuillez cliquer sur le lien suivant ou le coller dans votre navigateur pour terminer le processus :",
    youDidNotRequestPassword:
      "Si vous ne l'avez pas demandé, veuillez ignorer cet e-mail et votre mot de passe restera inchangé.",
  },
  error: {
    deletingFile: "Une erreur s'est produite lors de la suppression du fichier.",
    emailOrPasswordIncorrect: "L'adresse e-mail ou le mot de passe fourni est incorrect.",
    followingFieldsInvalid_one: "Le champ suivant n'est pas valide :",
    followingFieldsInvalid_other: 'Les champs suivants ne sont pas valides :',
    noFilesUploaded: "Aucun fichier n'a été téléversé.",
    notAllowedToPerformAction: "Vous n'êtes pas autorisé à effectuer cette action.",
    problemUploadingFile: 'Il y a eu un problème lors du téléversement du fichier.',
    unableToDeleteCount: 'Impossible de supprimer {{count}} sur {{total}} {{label}}.',
    unableToUpdateCount: 'Impossible de mettre à jour {{count}} sur {{total}} {{label}}.',
    unauthorized: 'Non autorisé, vous devez être connecté pour effectuer cette demande.',
    userLocked:
      "Cet utilisateur est verrouillé en raison d'un trop grand nombre de tentatives de connexion infructueuses.",
    valueMustBeUnique: 'La valeur doit être unique',
  },
  fields: {
    chooseBetweenCustomTextOrDocument:
      'Choisissez entre saisir une URL personnalisée ou créer un lien vers un autre document.',
    chooseDocumentToLink: 'Choisissez un document vers lequel établir un lien',
    customURL: 'URL personnalisée',
    enterURL: 'Entrez une URL',
    internalLink: 'Lien interne',
    linkType: 'Type de lien',
    openInNewTab: 'Ouvrir dans un nouvel onglet',
    textToDisplay: 'Texte à afficher',
  },
  general: {
    copy: 'Copie',
    createdAt: 'Créé(e) à',
    deletedCountSuccessfully: '{{count}} {{label}} supprimé avec succès.',
    deletedSuccessfully: 'Supprimé(e) avec succès.',
    email: 'E-mail',
    notFound: 'Pas trouvé',
    row: 'Ligne',
    rows: 'Lignes',
    successfullyCreated: '{{label}} créé(e) avec succès.',
    successfullyDuplicated: '{{label}} dupliqué(e) avec succès.',
    thisLanguage: 'Français',
    updatedAt: 'Modifié le',
    updatedCountSuccessfully: '{{count}} {{label}} mis à jour avec succès.',
    updatedSuccessfully: 'Mis à jour avec succés.',
    user: 'Utilisateur',
    users: 'Utilisateurs',
    value: 'Valeur',
  },
  upload: {
    fileName: 'Nom du fichier',
    fileSize: 'Taille du fichier',
    height: 'Hauteur',
    sizes: 'Tailles',
    width: 'Largeur',
  },
  validation: {
    emailAddress: "S'il vous plaît, veuillez entrer une adresse e-mail valide.",
    enterNumber: "S'il vous plait, veuillez entrer un nombre valide.",
    greaterThanMax: '{{value}} est supérieur au max autorisé {{label}} de {{max}}.',
    invalidInput: 'Ce champ a une entrée invalide.',
    invalidSelection: 'Ce champ a une sélection invalide.',
    invalidSelections: 'Ce champ contient des sélections invalides suivantes :',
    lessThanMin: '{{value}} est inférieur au min autorisé {{label}} de {{min}}.',
    longerThanMin:
      'Cette valeur doit être supérieure à la longueur minimale de {{minLength}} caractères.',
    notValidDate: '"{{value}}" n\'est pas une date valide.',
    required: 'Ce champ est requis.',
    requiresAtLeast: 'Ce champ doit avoir au moins {{count}} {{label}}.',
    requiresNoMoreThan: 'Ce champ ne doit pas avoir plus de {{count}} {{label}}.',
    requiresTwoNumbers: 'Ce champ doit avoir deux chiffres.',
    shorterThanMax:
      'Cette valeur doit être inférieure à la longueur maximale de {{maxLength}} caractères.',
    trueOrFalse: "Ce champ ne peut être égal qu'à vrai ou faux.",
    validUploadID: "Ce champ n'est pas un valide identifiant de fichier.",
  },
  version: {
    autosavedSuccessfully: 'Enregistrement automatique réussi.',
    draft: 'Brouillon',
    draftSavedSuccessfully: 'Brouillon enregistré avec succès.',
    published: 'Publié',
    restoredSuccessfully: 'Restauré(e) avec succès.',
    status: 'Statut',
  },
}
