# Portfolio - Topher

Jekyll: https://jekyllrb.com/
Tachyons: http://tachyons.io/

## Notes for future reference
1. Create new directory locally
2. `git clone git@github.com:tachyons-css/tachyons.git [dir-name]`
3. `cd [dir-name]`
4. Create new Github repo, then `git remote rm origin`
5. `git remote add origin [repo-url]`
6. `git pomu`
7. `npm install`
8. `sudo gem install -n /usr/local/bin jekyll`
9. `jekyll new . --force`
10. Modify `.gitignore` to include `node_modules`, `npm-debug.log`, `.DS_STORE`, and `*.swp`
11. Modify `_confit.yml` and add `exclude: ['build', 'bower.json', 'license', 'node_modules', 'package.json', 'readme.md', 'src']` at the end to exclude them from the Jekyll build
12. Run `jekyll serve` to test that everything is working; if not, you may need to `gem install bundler` and `gem install minima` first (dependencies may not have gotten installed with Jekyll)

## License

MIT
