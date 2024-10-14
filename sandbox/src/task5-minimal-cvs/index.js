/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    const versions = [initialCommit.slice()];  
    return {
        head: function() {
            return versions[versions.length - 1].slice();
        },
        history: function() {
            return versions.map(version => version.slice());
        },
        push: function(element) {
            const newVersion = this.head();
            newVersion.push(element);
            versions.push(newVersion);
        },
        pop: function() {
            const newVersion = this.head();
            const poppedElement = newVersion.pop();
            versions.push(newVersion);
            return poppedElement;
        }
    };
};