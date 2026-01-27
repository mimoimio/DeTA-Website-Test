---
title: "2025 First Blog Post"
image: "/images/DetaMeetup7.png"
date: 2025-11-16
description: "Some rules to write a blog post for DeTA Community, and Git Working Tree"
author: rahim.aiman@gmail.com
tags: [git, github actions]
---

# 2025 First Blog Post
Authored By : Aiman Rahim, Grad.Eng
## Introduction
DeTA hasn't been writing anything at all. Even from the beginning, and I think it's time we write something and invite guest writers. So, this is pretty much DeTA's first ***real*** blog post.

Some guidelines to make this interesting:
1. No AI generated blog posts. Authors must write posts manually like the old days
2. Focus on genuine sharing, but in depth. Therefore, authors have to do some research in what they are trying to share. Topics can be as simple as Git Submodules, but maybe you can share a bit of history, or how to use, or advanced use-case. This keeps the quality of content a bit high, I guess.
3. You may use formal language, like in a journal article, or you can write casually. Just don't make it too unserious. We have a standard to uphold. The quality of your English does not matter. Majority of the readers are Malaysians anyway.
4. We will improve the quality of our content as we go along with this.
5.  Write your stuff in markdown.

With that out of the way, let's start with something small and simple. Git, a software every developer in the world knows. Today as I was using Claude Code to redesign my [Website](https://plashspeed-aiman.github.io), I stumbled a small but neat piece of knowledge. It's located in my ci.yml and it looks like this :
```yml
- name: deploy to github pages
  run: |
    git --work-tree dist add --all  
    git commit -m "deploy to github pages"  
    git push origin HEAD:gh-pages --force
```
I kind of wonder how to actually push files from one branch to another because that is how I update my website every year but automatically using Github Actions. So as I am reading the docs at [Git](https://git-scm.com/), while writing this post, the definition of the ``work-tree`` argument is :

```
Set the path to the working tree. It can be an absolute path or a path relative to the current working directory. 
This can also be controlled by setting the GIT_WORK_TREE environment variable and the core.worktree configuration variable 
(see core.worktree in [git-config[1]](https://git-scm.com/docs/git-config) for a more detailed discussion).
```

A working tree acts as a "workspace" for your files as mentioned [here](https://stackoverflow.com/questions/3689838/git-difference-between-head-working-tree-and-index):

``` 
1.  the  **workspace**  is the directory tree of (source) files that you see and edit.
```

What I can conclude from the Github Actions file, is that after Bun has finished building the app, and create a /dist folder, the working tree is set to the dist folder, then GHA (Github Actions) commits the output files **only** and then pushes to the branch `gh-pages` of the same repo.

Some extra info :
**`HEAD:gh-pages`**: This specifies **what to push** and **where to push it**.

-   **`HEAD`**: Represents the **tip of your current local branch** (the commit you are currently on). This is the source.

-   **`gh-pages`**: This is the **name of the branch on the remote** (`origin`) that the local content will be pushed to. This is the destination.

And there you have it! DeTA's first real blog post. Messy, unrefined, but useful. We'll improve as time went on.


