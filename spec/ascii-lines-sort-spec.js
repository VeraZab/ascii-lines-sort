'use babel';

describe('AsciiLinesSort', () => {
    let workspaceElement, activationPromise, editor;

    beforeEach(() => {
        waitsForPromise(() => atom.workspace.open());
        runs(() => {
            editor = atom.workspace.getActiveTextEditor();
            workspaceElement = atom.views.getView(editor);
        });
    });

    describe('when the ascii-sort:sort event is triggered', () => {
        it('package is active', () => {
            atom.commands.dispatch(workspaceElement, 'ascii-lines-sort:sort');
            waitsForPromise(() => atom.packages.activatePackage('ascii-lines-sort'));
            runs(() => {
                expect(atom.packages.isPackageActive('ascii-lines-sort')).toBe(true);
            });
        });
    });
});
