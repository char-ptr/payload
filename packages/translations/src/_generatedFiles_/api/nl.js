export default {
  authentication: {
    account: 'Account',
    apiKey: 'API-sleutel',
    enableAPIKey: 'Activeer API-sleutel',
    newAccountCreated:
      'Er is zojuist een nieuw account voor u aangemaakt waarmee u toegang krijgt tot <a href="{{serverURL}}">{{serverURL}}</a>. Klik op de volgende link, of plak onderstaande URL in uw browser om uw e-mailadres te verifiëren: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Na de verificatie van uw e-mail kunt u succesvol inloggen.',
    resetYourPassword: 'Reset uw wachtwoord',
    verified: 'Geverifieerd',
    verifyYourEmail: 'Verifieer uw e-mailadres',
    youAreReceivingResetPassword:
      'U ontvangt dit omdat u (of iemand anders) het wachtwoord voor uw account opnieuw heeft aangevraagd. Klik op de volgende link, of plak deze in uw browser om het proces te voltooien:',
    youDidNotRequestPassword:
      'Als u dit niet heeft aangevraagd, negeer dan deze e-mail en uw wachtwoord zal ongewijzigd blijven.',
  },
  error: {
    deletingFile: 'Er is een fout opgetreden bij het verwijderen van dit bestand.',
    emailOrPasswordIncorrect: 'Het opgegeven e-mailadres of wachtwoord is onjuist.',
    followingFieldsInvalid_one: 'Het volgende veld is ongeldig:',
    followingFieldsInvalid_other: 'De volgende velden zijn ongeldig:',
    noFilesUploaded: 'Er zijn geen bestanden geüpload.',
    notAllowedToPerformAction: 'U mag deze actie niet uitvoeren.',
    problemUploadingFile: 'Er was een probleem bij het uploaden van het bestand.',
    unableToDeleteCount: 'Kan {{count}} van {{total}} {{label}} niet verwijderen.',
    unableToUpdateCount: 'Kan {{count}} van {{total}} {{label}} niet updaten.',
    unauthorized: 'Ongeautoriseerd, u moet ingelogd zijn om dit verzoek te doen.',
    userLocked: 'Deze gebruiker is vergrendeld wegens te veel mislukte inlogpogingen.',
    valueMustBeUnique: 'De waarde moet uniek zijn',
  },
  fields: {
    chooseBetweenCustomTextOrDocument:
      'Kies tussen het invoeren van een aangepaste tekst-URL of een koppeling naar een ander document.',
    chooseDocumentToLink: 'Kies een document om naar te linken',
    customURL: 'Eigen URL',
    enterURL: 'Voer een URL in',
    internalLink: 'Interne koppeling',
    linkType: 'Koppelingstype',
    openInNewTab: 'Openen in nieuw tabblad',
    textToDisplay: 'Tekst om weer te geven',
  },
  general: {
    copy: 'Kopiëren',
    createdAt: 'Aangemaakt op',
    deletedCountSuccessfully: '{{count}} {{label}} succesvol verwijderd.',
    deletedSuccessfully: 'Succesvol verwijderd.',
    email: 'E-mail',
    notFound: 'Niet gevonden',
    row: 'Rij',
    rows: 'Rijen',
    successfullyCreated: '{{label}} succesvol aangemaakt.',
    successfullyDuplicated: '{{label}} succesvol gedupliceerd.',
    thisLanguage: 'Nederlands',
    updatedAt: 'Aangepast op',
    updatedCountSuccessfully: '{{count}} {{label}} succesvol bijgewerkt.',
    updatedSuccessfully: 'Succesvol aangepast.',
    user: 'Gebruiker',
    users: 'Gebruikers',
    value: 'Waarde',
  },
  upload: {
    fileName: 'Bestandsnaam',
    fileSize: 'Bestandsgrootte',
    height: 'Hoogte',
    sizes: 'Groottes',
    width: 'Breedte',
  },
  validation: {
    emailAddress: 'Voer een geldig e-mailadres in.',
    enterNumber: 'Voer een geldig nummer in.',
    greaterThanMax: '{{value}} is groter dan de maximaal toegestane {{label}} van {{max}}.',
    invalidInput: 'Dit veld heeft een ongeldige invoer.',
    invalidSelection: 'Dit veld heeft een ongeldige selectie.',
    invalidSelections: 'Dit veld heeft de volgende ongeldige selecties:',
    lessThanMin: '{{value}} is kleiner dan de minimaal toegestane {{label}} van {{min}}.',
    longerThanMin: 'Deze waarde moet langer zijn dan de minimale lengte van {{minLength}} tekens.',
    notValidDate: '"{{value}}" is geen geldige datum.',
    required: 'Dit veld is verplicht.',
    requiresAtLeast: 'Dit veld vereist minstens {{count}} {{label}}.',
    requiresNoMoreThan: 'Dit veld vereist niet meer dan {{count}} {{label}}.',
    requiresTwoNumbers: 'Dit veld vereist twee nummers.',
    shorterThanMax: 'Dit veld moet korter zijn dan de maximale lengte van {{maxLength}} tekens.',
    trueOrFalse: 'Dit veld kan alleen waar of onwaar zijn.',
    validUploadID: 'Dit veld is geen geldige upload-ID.',
  },
  version: {
    autosavedSuccessfully: 'Succesvol automatisch bewaard.',
    draft: 'Concept',
    draftSavedSuccessfully: 'Concept succesvol bewaard.',
    published: 'Gepubliceerd',
    restoredSuccessfully: 'Herstelling succesvol.',
    status: 'Status',
  },
}
