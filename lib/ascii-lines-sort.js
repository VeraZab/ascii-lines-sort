'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'ascii-lines-sort:sort': () => this.sort()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  sort() {
    let editor;
    if (editor = atom.workspace.getActiveTextEditor()) {
        const selection = editor.getSelectedText();
        const sortedLines = selection.split('\n')
                            .sort()
                            .filter(line => {
                                if (line !== '') return line;
                            })
                            .join('\n');
        editor.insertText(sortedLines);
    }
  }

};
