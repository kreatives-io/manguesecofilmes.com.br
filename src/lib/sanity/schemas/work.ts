import { defineField, defineType } from "sanity";

export default defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({
      name: "artist",
      title: "Artist",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "workName",
      title: "Work Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      initialValue: "featured",
      type: "string",
      options: {
        list: [
          {title: "Featured", value: "featured"},
          {title: "Unpublished", value: "unpublished"},
        ]
      }
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "title",
      slug: "slug",
      media: "mainImage",
    },
  },
});
