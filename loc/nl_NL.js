module.exports = {
  _: {
    storage_is_encrypted: 'Uw opslag is versleuteld. Wachtwoord is vereist om het te ontcijferen',
    enter_password: 'Voer wachtwoord in',
    bad_password: 'Verkeerd wachtwoord, probeer opnieuw',
    never: 'nooit',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Selecteer portemonnee',
    options: 'opties',
    createBitcoinWallet: 'In order to use a Lightning wallet, a Bitcoin wallet is needed to fund it. Would you like to continue anyway?',
    list: {
      app_name: 'Blue Wallet',
      title: 'portemonnees',
      header: 'Een portemonnee vertegenwoordigt een geheime (privésleutel) en een adres' + 'dat u kunt delen om munten te ontvangen.',
      add: 'Portemonnee toevoegen',
      create_a_wallet: 'Portemonnee aanmaken',
      create_a_wallet1: 'Het is gratis en u kunt er',
      create_a_wallet2: 'zoveel maken als u wilt',
      latest_transaction: 'laatste transactie',
      empty_txs1: 'Uw transacties verschijnen hier,',
      empty_txs2: 'geen transacties op dit moment',
      tap_here_to_buy: 'Klik hier om Bitcoin te kopen',
    },
    reorder: {
      title: 'Portemonnees opnieuw ordenen',
    },
    add: {
      title: 'portemonnee toevoegen',
      description:
        'U kunt een back-up papieren portemonnee scannen (in WIF - Wallet Import Format) of een nieuwe portemonnee maken. Segwit-wallets worden standaard ondersteund.',
      scan: 'Scannen',
      create: 'Aanmaken',
      label_new_segwit: 'Nieuwe SegWit',
      label_new_lightning: 'Nieuwe Lightning',
      wallet_name: 'portemonnee naam',
      wallet_type: 'type',
      or: 'of',
      import_wallet: 'Portemonnee importeren',
      imported: 'Geïmporteerd',
      coming_soon: 'Komt binnenkort',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Portemonnee',
      address: 'Adres',
      type: 'Type',
      label: 'Label',
      destination: 'bestemming',
      description: 'beschrijving',
      are_you_sure: 'Weet u het zeker?',
      yes_delete: 'Ja, verwijderen',
      no_cancel: 'Nee, annuleren',
      delete: 'Verwijderen',
      save: 'Opslaan',
      delete_this_wallet: 'Verwijder deze portemonnee',
      export_backup: 'Exporteren / back-up maken',
      buy_bitcoin: 'Koop Bitcoin',
      show_xpub: 'Toon portemonnee XPUB',
    },
    export: {
      title: 'portemonnee exporteren',
    },
    xpub: {
      title: 'portemonnee XPUB',
      copiedToClipboard: 'Gekopieerd naar het klembord.',
    },
    import: {
      title: 'importeren',
      explanation:
        'Schrijf hier uw ezelsbruggetje, privésleutel, WIF, of een ander formaat. BlueWallet zal zijn best doen om het juiste formaat te raden en uw portemonnee te importeren',
      imported: 'Geïmporteerd',
      error: 'Importeren mislukt. Zorg ervoor dat de verstrekte gegevens geldig zijn.',
      success: 'Succes',
      do_import: 'Importeren',
      scan_qr: 'of QR-code scannen?',
    },
    scanQrWif: {
      go_back: 'Ga terug',
      cancel: 'Annuleren',
      decoding: 'Decoderen',
      input_password: 'Voer wachtwoord in',
      password_explain: 'Dit is een BIP38-gecodeerde privésleutel',
      bad_password: 'Verkeerd wachtwoord',
      wallet_already_exists: "Zo'n portemonnee bestaat al",
      bad_wif: 'Verkeerde WIF',
      imported_wif: 'WIF geïmporteerd ',
      with_address: ' met adres ',
      imported_segwit: 'SegWit geïmporteerd',
      imported_legacy: 'Legacy geïmporteerd',
      imported_watchonly: 'Watch-only geïmporteerd',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transacties',
      title: 'transacties',
      description: 'Een lijst met ingaande of uitgaande transacties van uw portemonnee',
      conf: 'conf',
    },
    details: {
      title: 'Transacties',
      from: 'Invoer',
      to: 'Uitgang',
      copy: 'Kopiëren',
      transaction_details: 'Transactie details',
      show_in_block_explorer: 'Weergeven in blokverkenner',
    },
  },
  send: {
    header: 'Vertuur',
    details: {
      title: 'transacties aanmaken',
      amount_field_is_not_valid: 'Bedrag veld is niet geldig',
      fee_field_is_not_valid: 'Tarief is niet geldig',
      address_field_is_not_valid: 'Adresveld is niet geldig',
      total_exceeds_balance: 'Het verzendingsbedrag overschrijdt het beschikbare saldo.',
      create_tx_error: 'Er is een fout opgetreden bij het maken van de transactie. Zorg ervoor dat het adres geldig is.',
      address: 'adres',
      amount_placeholder: 'te verzenden bedrag (in BTC)',
      fee_placeholder: 'plus transactie vergoeding (in BTC)',
      note_placeholder: 'notitie voor mezelf',
      cancel: 'Annuleren',
      scan: 'Scannen',
      send: 'Verzenden',
      create: 'Aanmaken',
      remaining_balance: 'Resterende saldo',
    },
    confirm: {
      header: 'Bevestig',
      sendNow: 'Nu verzenden',
    },
    success: {
      done: 'Klaar',
    },
    create: {
      details: 'Details',
      title: 'transactie aanmaken',
      error: 'Fout bij het maken van transactie. Ongeldig adres of bedrag?',
      go_back: 'Ga terug',
      this_is_hex: 'Dit is de transactie-hex, ondertekend en klaar om op het netwerk te worden uitgezonden.',
      to: 'Naar',
      amount: 'Bedrag',
      fee: 'Vergoeding',
      tx_size: 'TX grootte',
      satoshi_per_byte: 'Satoshi per byte',
      memo: 'Memo',
      broadcast: 'Uitzenden',
      not_enough_fee: 'Niet genoeg vergoeding. Verhoog de vergoeding',
    },
  },
  receive: {
    header: 'Ontvang',
    details: {
      title: 'Deel dit adres met betaler',
      share: 'delen',
      copiedToClipboard: 'Gekopieerd naar het klembord.',
      label: 'Omschrijving',
      setAmount: 'Ontvang met bedrag',
    },
  },
  buyBitcoin: {
    header: 'Koop Bitcoin',
    tap_your_address: 'Tik op uw adres om het naar het klembord te kopiëren:',
    copied: 'Gekopieerd naar het klembord!',
  },
  settings: {
    header: 'instellingen',
    plausible_deniability: 'Plausibele ontkenning...',
    storage_not_encrypted: 'Opslag: niet versleuteld',
    storage_encrypted: 'Opslag: versleuteld',
    password: 'Wachtwoord',
    password_explain: 'Maak een wachtwoord aan dat u wilt gebruiken om de opslag te versleutelen',
    retype_password: 'Geef nogmaals het wachtwoord',
    passwords_do_not_match: 'Wachtwoorden komen niet overeen',
    encrypt_storage: 'Versleutel opslag',
    about: 'Over',
    language: 'Taal',
    currency: 'Valuta',
  },
  plausibledeniability: {
    title: 'Plausibele ontkenning',
    help:
      'Onder bepaalde omstandigheden kunt u worden gedwongen om uw' +
      ' wachtwoord te onthullen. Om uw munten veilig te houden, kan ' +
      'BlueWallet nog een versleutelde opslag aanmaken, met een ander ' +
      'wachtwoord. Onder druk kunt u dit wachtwoord bekendmaken aan ' +
      'de derde partij. Indien ingevoerd in BlueWallet, zal het nieuwe ' +
      "nep'-opslagruimte worden ontgrendeld. Dit lijkt legitiem voor de " +
      'derde partij, maar zal uw hoofdopslag met munten niet bekend maken ' +
      'aan de derde partij',
    help2:
      'De nieuwe opslag zal volledig functioneel zijn en u kunt er ' + 'een minimum aantal munten opslaan zodat het geloofwaardig lijkt.',
    create_fake_storage: 'Nep versleutelde opslag aanmaken',
    go_back: 'Ga terug',
    create_password: 'Wachtwoord aanmaken',
    create_password_explanation: 'Wachtwoord voor nep-opslag hoort niet overeen te komen met wachtwoord voor uw hoofdopslag',
    password_should_not_match: 'Wachtwoord voor nep-opslag hoort niet overeen te komen met wachtwoord voor uw hoofdopslag',
    retype_password: 'Herhaal wachtwoord',
    passwords_do_not_match: 'Wachtwoorden komen niet overeen, probeer het opnieuw',
    success: 'Succes',
  },
  lnd: {
    title: 'fondsen beheren',
    choose_source_wallet: 'Kies een bron portemonnee',
    refill_lnd_balance: 'Vul Lightning-portemonneesaldo bij',
    refill: 'Bijvullen',
    withdraw: 'Opvragen',
    expired: 'Verlopen',
    sameWalletAsInvoiceError: 'U kunt geen factuur betalen met dezelfde portemonnee die is gebruikt om de factuur te maken.',
  },
};
