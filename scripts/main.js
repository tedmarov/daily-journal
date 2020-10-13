import { entryLog } from "./JournalEntryList.js"
import { useJournalEntries } from "./JournalDataProvider.js"

const allTheEntries = useJournalEntries

entryLog()
entryListComponent()