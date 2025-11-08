# Fake/Placeholder Data Cleanup Documentation

This document catalogs all instances of fake, placeholder, dummy, and test data found in the Internet Masterpiece Gatsby project that need to be replaced with real content.

## Summary Statistics

- **Total post files with dummy content**: 13 out of 13 posts
- **Files with placeholder text**: 15 files (13 posts + 2 info pages)
- **Files with test meta descriptions**: 14 files (12 posts + 2 info pages)
- **Total "placeholder text" occurrences**: 28+
- **Hardcoded example contact data**: 1 file (contact.md)
- **Test image URLs**: 3 unique URLs referenced in 8+ posts
- **Test YouTube embed**: 1 video in 3+ posts

---

## 1. Content Posts with Placeholder Text

### Posts with Full Placeholder Text Blocks

These posts contain generic placeholder text that explicitly states it's meant to be replaced:

#### Post Files to Update:

1. **`content/posts/post-5.md`** (post-five.md)
   - Lines 8-11: Placeholder excerpt
   - Lines 17-20: Full placeholder text blocks
   - Status: Needs real content

2. **`content/posts/post-6.md`**
   - Lines 8-11: Placeholder excerpt
   - Lines 17-20: Placeholder text blocks
   - Status: Needs real content

3. **`content/posts/post-8.md`**
   - Lines 9-11: Placeholder excerpt
   - Lines 18-20: Placeholder text blocks
   - Status: Needs real content

4. **`content/posts/post-11.md`** (Yellow Van)
   - Lines 8-11: Placeholder excerpt
   - Lines 17-20: Placeholder text blocks
   - Status: Needs real content

5. **`content/posts/post-12.md`** (Trees)
   - Lines 8-11: Placeholder excerpt
   - Lines 17-20: Placeholder text blocks
   - Status: Needs real content

6. **`content/posts/post-two.md`** (Post Two)
   - Line 15: "This is placeholder text that our web designers put here to make sure words appear properly on your website..."
   - Line 17: Continuation of placeholder text
   - Status: Needs real content

7. **`content/posts/post-three.md`** (Mountains)
   - Lines 13-18: Placeholder content repeating generic text
   - Status: Needs real content

8. **`content/posts/post-10.md`** (Cat)
   - Lines 17-18: Placeholder text content
   - Status: Needs real content

9. **`content/posts/post-four.md`** (City)
   - Line 26: "The second paragraph. This is placeholder text that our web designers put here..."
   - Status: Needs real content

10. **`content/posts/post-7.md`** (Chairs)
    - Line 27: "The second paragraph. This is placeholder text that our web designers put here..."
    - Status: Needs real content

11. **`content/posts/post-9.md`** (Sign)
    - Line 26: "The second paragraph. This is placeholder text that our web designers put here..."
    - Status: Needs real content

12. **`content/posts/hello-world.md`** (Red)
    - Line 26: "The second paragraph. This is placeholder text that our web designers put here..."
    - Status: Needs real content

---

## 2. Test Meta Data in Posts

All the following post files contain hardcoded "test meta" descriptions and titles that need to be replaced with real SEO metadata:

### Files with Test Meta Data:

1. **`content/posts/post-two.md`**
   - Lines 11-12: `description: test meta description` and `title: test meta title`

2. **`content/posts/post-6.md`**
   - Lines 13-14: Test meta data

3. **`content/posts/post-7.md`**
   - Lines 17, 19: Test meta data

4. **`content/posts/post-8.md`**
   - Lines 14-15: Test meta data

5. **`content/posts/post-9.md`**
   - Lines 16, 18: Test meta data

6. **`content/posts/post-10.md`**
   - Lines 12-13: Test meta data

7. **`content/posts/post-11.md`**
   - Lines 13-14: Test meta data

8. **`content/posts/post-12.md`**
   - Lines 13-14: Test meta data

9. **`content/posts/post-four.md`**
   - Lines 16, 18: Test meta data

10. **`content/posts/post-five.md`**
    - Lines 14-15: Test meta data

11. **`content/posts/post-three.md`**
    - Lines 12-13: Test meta data

12. **`content/posts/hello-world.md`**
    - Lines 16, 18: Test meta data

13. **`content/posts/2018-05-25-testing-1-8-2.md`**
    - Lines 14-15: Test meta data

**Action Required**: Replace all instances of "test meta description" and "test meta title" with proper, unique SEO metadata for each post.

---

## 3. Test/Dummy Data Files

### Complete Test Files to Review or Delete:

1. **`content/posts/2018-05-25-testing-1-8-2.md`** (Bird)
   - Line 3: Title: "Bird"
   - Lines 8-12: Placeholder excerpt
   - Lines 14-15: Test meta data
   - Lines 17-19: Placeholder text content
   - Line 21: Test image with alt text "jalalala"
   - **Status**: Entire file appears to be a test post for testing blog functionality
   - **Recommendation**: Delete this file or replace with real content

2. **`content/infoPages/2018-07-18-this-is-a-test-info-page.md`**
   - Line 3: `slug: test slug` - Hardcoded test slug value
   - Line 4: `title: This is a test info page` - Marked as test
   - Lines 8-9: Test meta data
   - Lines 12-16: Placeholder text content
   - **Status**: Entire page is a test info page
   - **Recommendation**: Delete this file or replace with real content

---

## 4. Info Pages with Test Data

1. **`content/infoPages/default.md`**
   - Lines 7-8: Test meta data
   - Line 15: Placeholder text
   - **Action Required**: Replace with real meta data and content

---

## 5. Hardcoded Example Contact Information

### Critical: Replace with Real Contact Details

**`content/pages/contact.md`**
   - Line 7: `address: '404 James St, Burleigh Heads QLD 4220'` - Example physical address
   - Line 8: `phone: 0987 123 456` - Dummy phone number (clearly fake format)
   - Line 9: `email: example@example.com` - Standard placeholder email address
   - Line 15: `description: This is a meta description.` - Generic test meta description

**Action Required**:
- Replace with real business address
- Replace with real phone number
- Replace with real email address
- Replace with proper meta description

---

## 6. HTML Form Placeholders

**Note**: These are legitimate UI placeholders shown to users in form fields. Review to ensure they match your desired user experience:

### Form Components with Placeholders:

1. **`src/components/BlogSearch.js`**
   - Line 16: `placeholder="Search..."`

2. **`src/components/FormSimple.js`**
   - Line 21: `placeholder='Name'`
   - Line 30: `placeholder='Email'`
   - Line 53: `placeholder='Message'`

3. **`src/components/FormControlled.js`**
   - Line 120: `placeholder='Your Name'`
   - Line 133: `placeholder='Your Email'`
   - Line 145: `placeholder='Message'`

4. **`src/components/FormSimpleAjax.js`**
   - Line 80: `placeholder="Firstname"`
   - Line 90: `placeholder="Lastname"`
   - Line 122: `placeholder="Email"`
   - Line 146: `placeholder="Message"`

**Action Required**: Review these placeholders to ensure they're appropriate for your use case. These are typically acceptable as-is, but can be customized.

---

## 7. Sample Test Images and Media

### Test Images to Replace:

Multiple posts use a test image from Uploadcare:
- **Test Image URL**: `https://ucarecdn.com/ac9898a0-413a-467b-95fa-0a9959c30710/`
- **Found in**:
  - `content/posts/post-7.md`
  - `content/posts/post-9.md`
  - `content/posts/post-4.md`

### Test YouTube Video:

Posts contain a test YouTube video:
- **Test Video URL**: `https://www.youtube.com/embed/Id64silK_7M`
- **Found in**:
  - `content/posts/post-7.md`
  - `content/posts/post-9.md`
  - `content/posts/post-4.md`

**Action Required**: Replace with real images and videos relevant to your content.

---

## 8. Lorem Ipsum-like Latin Excerpt Text

Posts contain sample Latin excerpt text that needs replacement:

**Sample Excerpt Text Found in Multiple Posts**:
```
"Etiam ac quam eget lectus venenatis ullamcorper sit amet non arcu. Nullam interdum arcu vitae augue pulvinar sodales. Sed non dui diam. Quisque lectus est, lobortis ac efficitur vitae, posuere a mauris. Phasellus ac dui pellentesque, lacinia risus ut, imperdiet eros."
```

**Found in**:
- Posts 4-9, post-7

**Action Required**: Replace with real, meaningful excerpts.

---

## 9. CMS Config Default Values

**File**: `static/admin/config.yml`

These are default template configurations. Review to ensure they match your needs:

- Line 33: `default: ContactPage,` - Default template
- Line 35: `default: 'contact'` - Default slug value
- Lines 58, 66, 74: `default: ''` - Empty default values for map coordinates
- Line 109: `default: BlogIndex,` - Default template
- Line 111: `default: 'blog'` - Default slug
- Line 148: `default: ComponentsPage,` - Default template
- Line 150: `default: 'components'` - Default slug
- Line 163: `default: ''` - Empty default for accordion titles
- Line 205: `default: HomePage,` - Default template
- Line 207: `default: ''` - Empty slug default
- Line 256: `default: DefaultPage,` - Default template
- Line 290: `default: SinglePost` - Default post template
- Line 296: `default: 'Published'` - Default post status
- Line 345: `default: BlogIndex` - Default category template

**Action Required**: Review these defaults - they're typically acceptable as CMS configuration defaults.

---

## Cleanup Priorities

### Priority 1 - Critical (Customer-Facing Data):
1. **Contact Information** (`content/pages/contact.md`) - Replace fake address, phone, and email
2. **All Post Content** - Replace placeholder text in all 13 posts
3. **Test Meta Descriptions** - Replace in all 14 files

### Priority 2 - High (SEO & Content Quality):
1. **Test Images and Videos** - Replace with real media
2. **Latin Excerpts** - Replace with real excerpts
3. **Test Posts** - Delete or replace test files (2018-05-25-testing-1-8-2.md, test-info-page.md)

### Priority 3 - Medium (User Experience):
1. **Form Placeholders** - Review and customize if needed
2. **Info Page Content** - Replace placeholder text in default.md

### Priority 4 - Low (Configuration):
1. **CMS Config Defaults** - Review but likely acceptable as-is

---

## Recommended Cleanup Approach

1. **Start with Priority 1 items** - especially contact information
2. **Work through posts systematically** - update content, meta data, images
3. **Delete or replace test files** completely
4. **Review and update info pages**
5. **Final review of all placeholders** to ensure nothing was missed

---

## Notes

All of this data appears to be intentional sample/template data from the Gatsby CMS starter template, meant to demonstrate structure and functionality while awaiting replacement with real content.

**Created**: November 8, 2025
**Status**: Ready for cleanup
