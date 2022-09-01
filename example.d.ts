export interface Qiita_API_v2_JSON_Schema { // In this schema file, we represents the public interface of Qiita API v2 in JSON Hyper Schema draft v4.
  access_token: { // Access token for Qiita API v2
    client_id: string; // An unique ID to identify a registered client ("a91f0396a0968ff593eafdd194e3d17d32c41b1da7b25e873b42e9058058cd9d")
    scopes: string[]; // Authorized action scopes of the access token
    token: string; // Access token identifier string ("ea5d0a593b2655e9568f144fb1826342292f5c6b7d406fda00577b8d1530d8a5")
  };
  authenticated_user: { // An user currently authenticated by a given access token. This resources has more detailed information than normal User resource.
    description: string | null; // self-description ("Hello, world.")
    facebook_id: string | null; // Facebook ID ("qiita")
    followees_count: number; // Followees count (100)
    followers_count: number; // Followers count (200)
    github_login_name: string | null; // GitHub ID ("qiitan")
    id: string; // User ID ("qiita")
    items_count: number; // How many items a user posted on qiita.com (Items on Qiita Team are not included) (300)
    linkedin_id: string | null; // LinkedIn ID ("qiita")
    location: string | null; // Location ("Tokyo, Japan")
    name: string | null; // Customized user name ("Qiita キータ")
    organization: string | null; // Organization which a user belongs to ("Qiita Inc.")
    permanent_id: number; // Unique integer ID (1)
    profile_image_url: string; // Profile image URL ("https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439")
    team_only: boolean; // A flag whether this user is configured as team-only
    twitter_screen_name: string | null; // Twitter screen name ("qiita")
    website_url: string | null; // Website URL ("https://qiita.com")
    image_monthly_upload_limit: number; // Monthly image upload limit (1048576)
    image_monthly_upload_remaining: number; // Monthly remaining image upload size (524288)
  };
  comment: { // A comment posted on an item or a project. A comment on a project is available only on Qiita Team.
    body: string; // Comment body in Markdown ("# Example")
    created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
    id: string; // Comment unique ID ("3391f50c35f953abfc4f")
    rendered_body: string; // Comment body in HTML ("<h1>Example</h1>")
    updated_at: string; // Date-time when this data was updated ("2000-01-01T00:00:00+00:00")
    user: { // A Qiita user (a.k.a. account)
      description: string | null; // self-description ("Hello, world.")
      facebook_id: string | null; // Facebook ID ("qiita")
      followees_count: number; // Followees count (100)
      followers_count: number; // Followers count (200)
      github_login_name: string | null; // GitHub ID ("qiitan")
      id: string; // User ID ("qiita")
      items_count: number; // How many items a user posted on qiita.com (Items on Qiita Team are not included) (300)
      linkedin_id: string | null; // LinkedIn ID ("qiita")
      location: string | null; // Location ("Tokyo, Japan")
      name: string | null; // Customized user name ("Qiita キータ")
      organization: string | null; // Organization which a user belongs to ("Qiita Inc.")
      permanent_id: number; // Unique integer ID (1)
      profile_image_url: string; // Profile image URL ("https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439")
      team_only: boolean; // A flag whether this user is configured as team-only
      twitter_screen_name: string | null; // Twitter screen name ("qiita")
      website_url: string | null; // Website URL ("https://qiita.com")
    };
  };
  expanded_template: { // You can preview the expanded result of a given template. This is available only on Qiita Team.
    expanded_body: string; // An item body where variables are expanded ("Weekly MTG on 2000/01/01")
    expanded_tags: { // A list of tags where variables are expanded ([{"name":"MTG/2000/01/01","versions":["0.0.1"]}])
      name: string;
      versions?: string[];
    }[];
    expanded_title: string; // An item title where variables are expanded ("Weekly MTG on 2015/06/03")
  };
  group: { // Represents a group on Qiita Team
    created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
    description: string; // A group description. ("This group is for developers.")
    name: string; // Group name for display. ("Dev")
    private: boolean; // A flag to tell which this group is private or public.
    updated_at: string; // Date-time when this data was updated ("2000-01-01T00:00:00+00:00")
    url_name: string; // Unique name on a team. ("dev")
  };
  group_member: { // Represents a group member on Qiita Team
    id: string; // User ID ("qiita")
    name: string; // User name in the team ("Qiita キータ")
    email: string; // Email address of the member(return empty string when you are neither admin nor owner in team) ("example@example.com")
  };
  item: { // Represents an item posted from a user
    rendered_body: string; // Item body in HTML ("<h1>Example</h1>")
    body: string; // Item body in Markdown ("# Example")
    coediting: boolean; // A flag whether this item is co-edit mode (only available on Qiita Team)
    comments_count: number; // Comments count (100)
    created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
    group: { // Represents a group on Qiita Team
      created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
      description: string; // A group description. ("This group is for developers.")
      name: string; // Group name for display. ("Dev")
      private: boolean; // A flag to tell which this group is private or public.
      updated_at: string; // Date-time when this data was updated ("2000-01-01T00:00:00+00:00")
      url_name: string; // Unique name on a team. ("dev")
    };
    id: string; // An unique item ID ("c686397e4a0f4f11683d")
    likes_count: number; // Likes count (only available on Qiita) (100)
    private: boolean; // A flag whether this item is private (only available on Qiita)
    reactions_count: number; // Emoji reactions count (only availabble on Qiita Team) (100)
    tags: { // A list of tags ([{"name":"Ruby","versions":["0.0.1"]}])
      name: string;
      versions?: string[];
    }[];
    title: string; // The title of this item ("Example title")
    updated_at: string; // Date-time when this data was updated ("2000-01-01T00:00:00+00:00")
    url: string; // The URL of this item ("https://qiita.com/Qiita/items/c686397e4a0f4f11683d")
    user: { // A Qiita user (a.k.a. account)
      description: string | null; // self-description ("Hello, world.")
      facebook_id: string | null; // Facebook ID ("qiita")
      followees_count: number; // Followees count (100)
      followers_count: number; // Followers count (200)
      github_login_name: string | null; // GitHub ID ("qiitan")
      id: string; // User ID ("qiita")
      items_count: number; // How many items a user posted on qiita.com (Items on Qiita Team are not included) (300)
      linkedin_id: string | null; // LinkedIn ID ("qiita")
      location: string | null; // Location ("Tokyo, Japan")
      name: string | null; // Customized user name ("Qiita キータ")
      organization: string | null; // Organization which a user belongs to ("Qiita Inc.")
      permanent_id: number; // Unique integer ID (1)
      profile_image_url: string; // Profile image URL ("https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439")
      team_only: boolean; // A flag whether this user is configured as team-only
      twitter_screen_name: string | null; // Twitter screen name ("qiita")
      website_url: string | null; // Website URL ("https://qiita.com")
    };
    page_views_count: string | number; // The number of views. (100)
    team_membership: { // A Qiita Team member.
      name: string; // User name in the team ("Qiita キータ")
    };
  };
  like: { // <strong>The Like API on Qiita Team has been abolished since Nov 4 2020. Please use the Emoji reaction API instead.</strong> Represents a like to an item.
    created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
    user: { // A Qiita user (a.k.a. account)
      description: string | null; // self-description ("Hello, world.")
      facebook_id: string | null; // Facebook ID ("qiita")
      followees_count: number; // Followees count (100)
      followers_count: number; // Followers count (200)
      github_login_name: string | null; // GitHub ID ("qiitan")
      id: string; // User ID ("qiita")
      items_count: number; // How many items a user posted on qiita.com (Items on Qiita Team are not included) (300)
      linkedin_id: string | null; // LinkedIn ID ("qiita")
      location: string | null; // Location ("Tokyo, Japan")
      name: string | null; // Customized user name ("Qiita キータ")
      organization: string | null; // Organization which a user belongs to ("Qiita Inc.")
      permanent_id: number; // Unique integer ID (1)
      profile_image_url: string; // Profile image URL ("https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439")
      team_only: boolean; // A flag whether this user is configured as team-only
      twitter_screen_name: string | null; // Twitter screen name ("qiita")
      website_url: string | null; // Website URL ("https://qiita.com")
    };
  };
  project: { // Represents a project on Qiita Team (only available on Qiita Team).
    rendered_body: string; // The projects page body in HTML ("<h1>Example</h1>")
    archived: boolean; // A flag whether this project is archived
    body: string; // The project page body in Markdown ("# Example")
    created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
    id: number; // A project ID unique in its team (1)
    name: string; // The name of a project ("Kobiro Project")
    reactions_count: number; // Emoji reactions count (100)
    updated_at: string; // Date-time when this data was updated ("2000-01-01T00:00:00+00:00")
  };
  reaction: { // An emoji reaction on Qiita Team (only availabble on Qiita Team).
    created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
    image_url: string; // An emoji image URL ("https://cdn.qiita.com/emoji/twemoji/unicode/1f44d.png")
    name: string; // A unique emoji name ("+1")
    user: { // A Qiita user (a.k.a. account)
      description: string | null; // self-description ("Hello, world.")
      facebook_id: string | null; // Facebook ID ("qiita")
      followees_count: number; // Followees count (100)
      followers_count: number; // Followers count (200)
      github_login_name: string | null; // GitHub ID ("qiitan")
      id: string; // User ID ("qiita")
      items_count: number; // How many items a user posted on qiita.com (Items on Qiita Team are not included) (300)
      linkedin_id: string | null; // LinkedIn ID ("qiita")
      location: string | null; // Location ("Tokyo, Japan")
      name: string | null; // Customized user name ("Qiita キータ")
      organization: string | null; // Organization which a user belongs to ("Qiita Inc.")
      permanent_id: number; // Unique integer ID (1)
      profile_image_url: string; // Profile image URL ("https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439")
      team_only: boolean; // A flag whether this user is configured as team-only
      twitter_screen_name: string | null; // Twitter screen name ("qiita")
      website_url: string | null; // Website URL ("https://qiita.com")
    };
  };
  reacted_item: { // It represents actions (number of views/comments/emoji reactions) to an article on Qiita Team, and is valid only on Qiita Team.
    comments: {
      created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
      id: string; // An unique comment ID ("3391f50c35f953abfc4f")
      reactions: {
        created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
        image_url: string; // An emoji image URL ("https://cdn.qiita.com/emoji/twemoji/unicode/1f44d.png")
        name: string; // A unique emoji name ("+1")
        user_id: string; // Reacted user id ("team_member")
      }[];
      updated_at: string; // Date-time when this data was updated ("2000-01-01T00:00:00+00:00")
      user_id: string; // Commented user id ("team_member")
    }[];
    created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
    id: string; // An unique item ID ("c686397e4a0f4f11683d")
    page_views_count: number; // The number of views. (100)
    reactions: {
      created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
      image_url: string; // An emoji image URL ("https://cdn.qiita.com/emoji/twemoji/unicode/1f44d.png")
      name: string; // A unique emoji name ("+1")
      user_id: string; // Reacted user id ("team_member")
    }[];
    title: string; // The title of this item ("Example title")
    url: string; // The URL of this item ("https://qiita.com/Qiita/items/c686397e4a0f4f11683d")
    updated_at: string; // Date-time when this data was updated ("2000-01-01T00:00:00+00:00")
    user_id: string; // Posted user id ("team_member")
  };
  team_membership_detail: { // Represents a member in team (only available on Qiita Team).
    description: string; // Self introduction ("Qiitaの公式アカウントです。")
    email: string; // Email address of the member (return empty string when you are neither admin nor owner in team) ("example@example.com")
    id: string; // User ID ("Qiita")
    last_accessed_at: string; // Date-time when this member was accessed (return empty string when you are neither admin nor owner in team) ("2000-01-01T00:00:00+00:00")
    name: string; // User name in the team ("Qiita キータ")
  };
  remove_team_member: { // Removes the specified user from the team (you and the team owner cannot be removed with this API).
  };
  tag: { // A tag attached to an item
    followers_count: number; // Followes count (100)
    icon_url: string | null; // Tag Icon URL ("https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/9de6a11d330f5694820082438f88ccf4a1b289b2/medium.jpg")
    id: string; // Tag name ("qiita")
    items_count: number; // Items count (200)
  };
  tagging: { // Represents an association between an item and a tag.
    name: string; // Tag name ("qiita")
    versions: string[]; //  (["0.0.1"])
  };
  team: { // Represents a team on Qiita Team (only available on Qiita Team).
    active: boolean; // A flag whether this team is active or not (true)
    id: string; // A unique team ID ("qiita-inc")
    name: string; // The team name configured for this team ("Qiita Inc.")
  };
  team_access_token: { // Access token for Qiita API v2 (only available on Qiita Team).
    client_id: string; // An unique ID to identify a registered client ("a91f0396a0968ff593eafdd194e3d17d32c41b1da7b25e873b42e9058058cd9d")
    scopes: string[]; // Authorized action scopes of the team access token
    token: string; // Team access token identifier string ("ea5d0a593b2655e9568f144fb1826342292f5c6b7d406fda00577b8d1530d8a5")
  };
  team_invitation: { // Represents members who are invited to on Qiita Team (only available on Qiita Team. administrative privileges required).
    email: string; // Email address of the invited member ("example@example.com")
    url: string; // Invitation URL. The expiration date is one day. ("https://team-name.qiita.com/registration/confirm?id=3&token=456c84ae60070161a36c08c9e710050abe5852cc")
  };
  template: { // Represents a template for generating an item boilerplate (only available on Qiita Team).
    body: string; // The body of this template ("Weekly MTG on %{Year}/%{month}/%{day}")
    id: number; // A unique template ID (1)
    name: string; // A template name ("Weekly MTG")
    expanded_body: string; // An item body where variables are expanded ("Weekly MTG on 2000/01/01")
    expanded_tags: { // A list of tags where variables are expanded ([{"name":"MTG/2000/01/01","versions":["0.0.1"]}])
      name: string;
      versions?: string[];
    }[];
    expanded_title: string; // An item title where variables are expanded ("Weekly MTG on 2015/06/03")
    group: { // Represents a group on Qiita Team
      created_at: string; // Date-time when this data was created ("2000-01-01T00:00:00+00:00")
      description: string; // A group description. ("This group is for developers.")
      name: string; // Group name for display. ("Dev")
      private: boolean; // A flag to tell which this group is private or public.
      updated_at: string; // Date-time when this data was updated ("2000-01-01T00:00:00+00:00")
      url_name: string; // Unique name on a team. ("dev")
    };
    tags: { // A list of tags ([{"name":"MTG/%{Year}/%{month}/%{day}","versions":["0.0.1"]}])
      name: string;
      versions?: string[];
    }[];
    title: string; // A template title where variables are to be expanded ("Weekly MTG on %{Year}/%{month}/%{day}")
    coedit?: boolean; // Co-editing mode. (true)
  };
  user: { // A Qiita user (a.k.a. account)
    description: string | null; // self-description ("Hello, world.")
    facebook_id: string | null; // Facebook ID ("qiita")
    followees_count: number; // Followees count (100)
    followers_count: number; // Followers count (200)
    github_login_name: string | null; // GitHub ID ("qiitan")
    id: string; // User ID ("qiita")
    items_count: number; // How many items a user posted on qiita.com (Items on Qiita Team are not included) (300)
    linkedin_id: string | null; // LinkedIn ID ("qiita")
    location: string | null; // Location ("Tokyo, Japan")
    name: string | null; // Customized user name ("Qiita キータ")
    organization: string | null; // Organization which a user belongs to ("Qiita Inc.")
    permanent_id: number; // Unique integer ID (1)
    profile_image_url: string; // Profile image URL ("https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439")
    team_only: boolean; // A flag whether this user is configured as team-only
    twitter_screen_name: string | null; // Twitter screen name ("qiita")
    website_url: string | null; // Website URL ("https://qiita.com")
  };
};
