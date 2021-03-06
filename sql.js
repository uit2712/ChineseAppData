Array.prototype.toTopicSQL = function() {
    return this.map(({ id, name, displayOrder, parentTopicId, createdDate, lastModifiedDate }) => `INSERT INTO Topics VALUES('${id}', N'${name}', NULL, ${parentTopicId === null ? 'NULL' : `'${parentTopicId}'`}, '${createdDate}', '${lastModifiedDate}', ${displayOrder})`).join(';\n');
}

Array.prototype.getVocabularySQL = function() {
    return this.map(({ id, word, topicId, pronunciation, createdDate, lastModifiedDate }) => `INSERT INTO Vocabularies VALUES('${id}', N'${word}', '${topicId}', N'${pronunciation}', '${createdDate}', '${lastModifiedDate}')`).join(';\n');
}

Array.prototype.getMeaningSQL = function() {
    return this.map(({ id, meaning, wordTypeId, wordId, createdDate, lastModifiedDate }) => `INSERT INTO Meanings VALUES('${id}', N'${meaning}', '${wordTypeId}', '${wordId}', '${createdDate}', '${lastModifiedDate}')`).join(';\n');
}

Array.prototype.getListExamplesSQL = function() {
    return this.map(({ id, exampleBold, meaning, meaningId, createdDate, lastModifiedDate, pronunciation }) => `INSERT INTO Examples VALUES('${id}', N'${exampleBold}', N'${meaning}', '${meaningId}', '${createdDate}', '${lastModifiedDate}', N'${pronunciation}')`).join(';\n');
}