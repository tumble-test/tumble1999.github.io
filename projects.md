---
layout: page
title: Projects
---

{% for project in site.projects %}
[{{ project.title }}]({{ project.url }})
{% endfor %}
