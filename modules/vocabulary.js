const vocabulary = {
  nouns: [
    'he',
    'she',
    'it',
    'the guest',
    'the man',
    'nobody',
    'everyone',
    'the woman',
    'the girl',
    'the boy',
    'the child'],
  adjectives: [
    'cold',
    'warm',
    'good',
    'distant',
    'absent',
    'close',
    'closed',
    'far away',
    'next',
    'different',
    'indifferent',
    'early',
    'shaken',
    'content',
    'trapped',
    'angry',
    'nervous',
    'late',
    'valuable',
    'brilliant',
    'tired',
    'blocked',
    'new',
    'safe',
    'crazy',
    'hurt',
    'old',
    'uneasy',
    'happy',
    'leaving',
    'deep',
    'sad',
    'important',
    'right',
    'alright',
    'relieved',
    'impossible',
    'wrong',
    'bad',
    'good'],
  verbs: [
    'will be',
    'has been',
    'is',
    'is not',
    'would be',
    'was',
    'was not',
    'seemed',
    'might be'],
  actions: [
    'heard',
    'overheard',
    'saw',
    'visited',
    'revisited',
    'looked at',
    'stared at',
    'knew',
    'needed',
    'was aware of',
    'mentioned',
    'longed for',
    'travelled to',
    'found',
    'struggled with',
    'touched',
    'thought about',
    'dreamt about',
    'told about',
    'wanted',
    'indicated'],
  objects: [
    'them',
    'her',
    'him',
    'the location',
    'the area',
    'it',
    'something',
    'what happened',
    'the object',
    'the thing',
    'the individual',
    'the situation',
    'the process',
    'the story',
    'the screen',
    'the organization',
    'the group',
    'the border',
    'the building',
    'the company',
    'the club',
    'the assembly',
    'the position',
    'someone'],
  singleObjects: [
    'story',
    'step',
    'mechanism',
    'device',
    'vehicle',
    'engine',
    'rule',
    'border',
    'process',
    'organization',
    'machine'],
  statements: [
    'yes',
    'yes',
    'yes',
    'no',
    'no',
    'no',
    'maybe',
    'perhaps',
    'could be',
    'I know',
    'I have no idea',
    'I had no idea',
    'I don’t know',
    'no idea',
    'true',
    'false',
    'sure'],
  questions: [
    'yes?',
    'no?',
    'really?',
    'why not?',
    'how?',
    'where?',
    'now?',
    'why?',
    'what?'],
  punctations: [
    '',
    '',
    '',
    '...',
    '.'],
  adverbs: [
    'quickly',
    'suddenly',
    'finally',
    'always',
    'never',
    'rarely',
    'really',
    'slowly',
    'carefully'],
  sentenceTemplates: [
    '{{ statement}}, {{ noun }} {{ verb }} {{ adjective }}',
    '{{ statement}}... {{ noun }} {{ verb }} {{ adjective }}',
    '{{ noun }} {{ verb }} {{ adjective }}{{ punctation }}',
    '{{ noun }} {{ verb }} {{ adjective }}{{ punctation }}',
    '{{ noun }} {{ action }} {{ object }}{{ punctation }}',
    'I {{ action }} {{ object }}{{ punctation }}',
    // 'the {{ adjective}} {{ single_object }}{{ punctation }}',
    'I was {{ adjective }}{{ punctation }}',
    'You were {{ adjective }}{{ punctation }}',
    '{{ noun }} {{ adverb }} {{ action }} {{ object }}',
    '{{ statement }}{{ punctation }}',
    '{{ question }}',
    '{{ question }} {{ noun }} {{ action }} {{ object }}?',
    '{{ statement }}... {{ noun }} {{ verb }}',
    '{{ noun }} {{ verb }} {{ adjective }}?',
    '{{ adverb }} {{ verb }} {{ noun }}{{ verb }}',
    '{{ question }} {{ statement }}',
    '{{ verb }} {{ object }}{{ punctation }}',
    '{{ noun }} {{ action }} {{ object }}{{ punctation }}']
}

module.exports = vocabulary