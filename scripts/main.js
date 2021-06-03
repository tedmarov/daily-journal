import { entryLog } from "./journal/JournalEntryList.js"
import { getEntries, useJournalEntries } from "./journal/JournalDataProvider.js"
import { JournalForm } from "./journal/JournalForm.js"
import { FilterBar } from "./filter/FilterBar.js"

entryLog()
useJournalEntries()
JournalForm()
FilterBar()